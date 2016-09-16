import React, { Component } from 'react';
import { withRouter } from 'react-router';
import StatsItem from '../StatsItem';
import LinksList from '../LinksList';
import Button from '../Button';
import { apiUrl, keysSeparator } from '../../constants';
import { bindClass, getRepositoryName } from '../../utils';

import './index.css';

class CompareRatio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      githubUrl: '',
      packageName: '',
      keys: [],
      data: {},
      message: 'Start comparison by adding repositories!',
    };
    bindClass(this);
  }

  initItems(keysString) {
    const { data } = this.state;
    const { router } = this.props;
    const keys = keysString ? keysString.split(keysSeparator): [];

    const promises = keys.map((key) => {
      if(data[key]) {
        return Promise.resolve(key);
      } else {
        return this.fetchStats(key).then((item => {
          return key;
        })).catch(()=>{ return null; });
      }
    });

    Promise.all(promises).then((result) => {
      const newKeys = result.filter(key => key!==null);
      if (newKeys.length > 0) {
        this.setState({
          message: ''
        });
      }

      this.setState({
        keys: newKeys
      });

      if (newKeys.length < keys.length) {
        router.push({
          pathname: '/compare',
          query: { keys: newKeys.join(keysSeparator) }
        });
      }
    });
  }

  fetchStats(key) {
    this.setState({
      message: 'Loading...'
    });

    return fetch(`${apiUrl}/${key}`).then((response) => {
      if (response.status === 200) {
        return response.json();
      } else {
        return response.text().then((errorMessage) => {
          throw new Error(errorMessage);
        });
      }
    }).then((item) => {
      const newData = Object.assign({}, this.state.data);
      newData[key] = item;

      this.setState({
        data: newData,
        message: null
      });

      return item;
    });
  }

  _handleGithubUrlChange(event) {
    this.setState({ githubUrl: event.target.value });
  }

  _handlePackageChange(event) {
    this.setState({ packageName: event.target.value });
  }

  _handleSubmit(event) {
    event.preventDefault();
    const { githubUrl, packageName, keys } = this.state;
    const { router } = this.props;
    const repository = getRepositoryName(githubUrl);
    const key = packageName ? `${repository}/${packageName}` : repository;
    
    if (repository === null) {
      this.setState({
        message: `Please, enter Github repository url!`
      });
      return;
    }

    if (keys.indexOf(key) !== -1) {
      this.clearForm();
      return;
    }

    this.fetchStats(key).then((item) => {
      this.clearForm();
      const newKeys = keys.slice();
      newKeys.push(key);

      router.push({
        pathname: '/compare',
        query: { keys: newKeys.join(keysSeparator) }
      });
    }).catch((err) => {
      this.setState({
        message: err.message
      });
    });
  }

  _handleRemove(keyToRemove) {
    const { router } = this.props;
    const { keys } = this.state;
    const newKeys = keys.filter((key)=> key!== keyToRemove);
    router.push({
      pathname: '/compare',
      query: { keys: newKeys.join(keysSeparator) }
    });
  }

  clearForm() {
    this.setState({
      message: null,
      githubUrl: '',
      packageName: '',
    });
  }

  componentWillMount() {
    const { keys } = this.props.location.query;
    this.initItems(keys);
  }

  componentWillReceiveProps(newProps) {
    const { keys } = newProps.location.query;
    this.initItems(keys);
  }

  render() {
    const {
      githubUrl, packageName,
      keys, data, message
    } = this.state;
    return (
      <div className="CompareRatio" id="compare">
        <h2>Enter repository data to start comparison</h2>
        <form className="CompareRatio-form" onSubmit={this._handleSubmit}>
          <input
            className="CompareRatio-input-long"
            type="text"
            value={githubUrl}
            placeholder="GitHub repository URL or name"
            onChange={this._handleGithubUrlChange}/>
          /
          <input
            className="CompareRatio-input"
            type="text"
            value={packageName}
            placeholder="npm package name"
            onChange={this._handlePackageChange}/>
          <button type="submit" className="CompareRatio-button">Add</button>
          <div className="CompareRatio-hint">
            Tip: Skip npm package if it is the same as repository name
          </div>
        </form>
        <div className="CompareRatio-message">
          { message ?
            <div className="">{message}</div>
          : null }
        </div>
        <div className="CompareRatio-list">
          { keys.map(item =>
            <div key={`${data[item].user}${data[item].repo}`} className="CompareRatio-list-item">
              <Button className="CompareRatio-list-item-remove"
                handleClick={this._handleRemove}
                payload={item}>
              X
              </Button>
              <StatsItem data={data[item]}/>
            </div>
          )}
        </div>
        <LinksList />
      </div>
    );
  }
}

CompareRatio.defaultProps = {
  keys: ''
};

export default withRouter(CompareRatio);

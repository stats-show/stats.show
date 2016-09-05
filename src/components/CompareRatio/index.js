import React, { Component } from 'react';
import { bindClass } from '../../utils';
import { apiUrl } from '../../constants';
import StatsItem from '../StatsItem';

import './index.css';

class CompareRatio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: '',
      repository: '',
      packageName: '',
      items: [],
      message: 'Start comparison by adding repositories!',
    };
    bindClass(this);
  }

  _handleUserChange(event) {
    this.setState({ user: event.target.value });
  }
  _handleRepoChange(event) {
    this.setState({ repository: event.target.value });
  }
  _handlePackageChange(event) {
    this.setState({ packageName: event.target.value });
  }

  _handleSubmit(event) {
    event.preventDefault();
    const { user, repository, packageName} = this.state;
    
    if (!user || !repository) {
       this.setState({
        message: `Please, enter username and repository name!`
      });
      return;
    }

    this.setState({
      message: 'Loading...'
    });

    fetch(`${apiUrl}/${user.trim()}/${repository.trim()}/${packageName.trim()}`).then((response) => {
      if (response.status === 200) {
        return response.json();
      } else {
        return response.text().then((errorMessage) => {
          throw new Error(errorMessage);
        });
      }
    }).then((item) => {
      const newItems = this.state.items.slice();
      newItems.push(item);

      this.setState({
        message: null,
        items: newItems,
        user: '',
        repository: '',
        packageName: '',
      });
    }).catch((err) => {
      this.setState({
        message: err.message
      });
    });
  }

  render() {
    const {
      user, repository, packageName,
      items, message
    } = this.state;
    return (
      <div className="CompareRatio" id="compare">
        <h2 >Enter repository data to start comparison</h2>
        <form className="CompareRatio-form" onSubmit={this._handleSubmit}>
          <input
            className="CompareRatio-input"
            type="text"
            value={user}
            placeholder="Github user name"
            onChange={this._handleUserChange}/>
          /
          <input
            className="CompareRatio-input"
            type="text"
            value={repository}
            placeholder="Github repository name"
            onChange={this._handleRepoChange}/>
          /
          <input
            className="CompareRatio-input"
            type="text"
            value={packageName}
            placeholder="npm package name"
            onChange={this._handlePackageChange}/>
          <button type="submit" className="CompareRatio-button">Add</button>
        </form>
        <div className="CompareRatio-message">
          { message ?
            <div className="">{message}</div>
          : null }
        </div>
        <div className="CompareRatio-list">
          { items.map(item =>
            <div key={`${item.user}${item.repo}`} className="CompareRatio-list-item">
              <StatsItem data={item}/>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default CompareRatio;

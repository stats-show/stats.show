import React, { Component } from "react";
import { withRouter } from "react-router";
import ViewSwitcher from "./ViewSwitcher";
import TileView from "./TileView";
import TableView from "./TableView";
import LinksList from "../LinksList";
import Loader from "../Loader";
import { apiUrl, keysSeparator } from "../../constants";
import { bindClass, getRepositoryName } from "../../utils";

import "./index.css";

class CompareRatio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      githubUrl: "",
      packageName: "",
      keys: [],
      data: {},
      message: null,
      isLoading: true
    };
    bindClass(this);
  }

  initItems(keysString) {
    const { data } = this.state;
    const { router } = this.props;
    const keys = keysString ? keysString.split(keysSeparator) : [];

    this.setState({
      isLoading: true
    });

    const promises = keys.map(key => {
      if (data[key]) {
        return Promise.resolve(key);
      } else {
        return this
          .fetchStats(key)
          .then(item => {
            return key;
          })
          .catch(() => {
            return null;
          });
      }
    });

    Promise.all(promises).then(result => {
      const newKeys = result.filter(key => key !== null);
      this.setState({
        keys: newKeys,
        message: null,
        isLoading: false
      });

      if (newKeys.length < keys.length) {
        router.push({
          pathname: "/compare",
          query: { keys: newKeys.join(keysSeparator) }
        });
      }
    });
  }

  fetchStats(key) {
    return fetch(`${apiUrl}/${key}`)
      .then(response => {
        if (response.status === 200) {
          return response.json();
        } else {
          return response.text().then(errorMessage => {
            throw new Error(errorMessage);
          });
        }
      })
      .then(item => {
        const newData = Object.assign({}, this.state.data);
        newData[key] = item;

        this.setState({
          data: newData
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

    this.setState({
      message: null,
      isLoading: true
    });

    this
      .fetchStats(key)
      .then(item => {
        this.clearForm();
        const newKeys = keys.slice();
        newKeys.push(key);

        router.push({
          pathname: this.props.location.pathname,
          query: { keys: newKeys.join(keysSeparator) }
        });
      })
      .catch(err => {
        this.setState({
          message: err.message,
          isLoading: false
        });
      });
  }

  _handleRemove(keyToRemove) {
    const { router } = this.props;
    const { keys } = this.state;
    const newKeys = keys.filter(key => key !== keyToRemove);
    router.push({
      pathname: this.props.location.pathname,
      query: { keys: newKeys.join(keysSeparator) }
    });
  }

  clearForm() {
    this.setState({
      message: null,
      githubUrl: "",
      packageName: ""
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
      githubUrl,
      packageName,
      keys,
      data,
      message,
      isLoading
    } = this.state;
    const { view } = this.props.params;
    return (
      <div className="CompareRatio" id="compare">
        <h2>Enter repository data to start comparison</h2>
        <form className="CompareRatio-form" onSubmit={this._handleSubmit}>
          <input
            className="CompareRatio-input-long"
            type="text"
            value={githubUrl}
            placeholder="GitHub repository URL or name"
            onChange={this._handleGithubUrlChange}
          />

          /

          <input
            className="CompareRatio-input"
            type="text"
            value={packageName}
            placeholder="nuget package name"
            onChange={this._handlePackageChange}
          />
          <button type="submit" className="CompareRatio-button">Add</button>
          <div className="CompareRatio-hint">
            Tip: Skip nuget package if it is the same as repository name
          </div>
        </form>
        <div className="CompareRatio-message-container">
          {isLoading && <Loader />}
          {message
            ? <div className="CompareRatio-message">{message}</div>
            : null}
        </div>
        {keys.length > 0
          ? <div>
              <ViewSwitcher query={this.props.location.query} />
              {view === "table"
                ? <TableView
                    keys={keys}
                    data={data}
                    handleRemove={this._handleRemove}
                    isLoading={isLoading}
                  />
                : <TileView
                    keys={keys}
                    data={data}
                    handleRemove={this._handleRemove}
                    isLoading={isLoading}
                  />}
            </div>
          : null}
        <LinksList />
      </div>
    );
  }
}

CompareRatio.defaultProps = {
  keys: ""
};

export default withRouter(CompareRatio);

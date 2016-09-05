import React, { Component } from 'react';
import { Link } from 'react-router';
import { keysSeparator } from '../../constants';

import "./index.css";

class LinksList extends Component {
  render() {
    const stateContainers = [
      'reactjs/redux',
      'facebook/flux',
      'goatslacker/alt',
      'reflux/refluxjs/reflux'
    ].join(keysSeparator);

    const reactD3Components = [
      'uber/react-vis',
      'esbullington/react-d3',
      'react-d3-library/react-d3-library',
      'recharts/recharts'
    ].join(keysSeparator);

    const bundlers = [
      'gulpjs/gulp',
      'gruntjs/grunt',
      'substack/node-browserify/browserify',
      'webpack/webpack'
    ].join(keysSeparator);

    return (
      <div className="LinksList">
        <h3 className="LinksList-title">Popular comparisons:</h3>
        <div className="LinksList-list">
          <div className="LinksList-list-item">
            <Link
              to={{ pathname: '/compare', query: { keys: stateContainers } }}
              className="LinksList-list-link">
              State Containers (Flux-like)
            </Link>
          </div>
          <div className="LinksList-list-item">
            <Link
              to={{ pathname: '/compare', query: { keys: bundlers } }}
              className="LinksList-list-link">
              Javascript Bundlers
            </Link>
          </div>
          <div className="LinksList-list-item">
            <Link
              to={{ pathname: '/compare', query: { keys: reactD3Components } }}
              className="LinksList-list-link">
              React Components for D3
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default LinksList;

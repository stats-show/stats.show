import React, { Component } from 'react';
import { Link } from 'react-router';
import { keysSeparator, links } from '../../constants';

import "./index.css";

class LinksList extends Component {
  render() {
    return (
      <div className="LinksList">
        <h3 className="LinksList-title">Popular comparisons:</h3>
        <div className="LinksList-list">
          {links.map((link, index) =>
             <div className="LinksList-list-item" key={index} >
              <Link
                to={{
                  pathname: '/compare',
                  query: {
                    keys: link.repos.map(repo => repo.github + (repo.npm ? "/" + repo.npm : '')).join(keysSeparator)
                  }
                }}
                className="LinksList-list-link">
                {link.title}
              </Link>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default LinksList;

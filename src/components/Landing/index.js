import React, { Component } from 'react';

import "./index.css";
import compare from "./compare.svg";
import graph from "./graph.svg";

class Landing extends Component {
  render() {
    return (
      <div className="Landing-container">
        <div className="Landing">
          <div className="Landing-title">
            <h1>Stats that matter</h1>
            <h3>Handy tool to compare javascript open-source projects</h3>
          </div>
          <div className="Landing-items-list">
            <div className="Landing-item">
              <div className="Landing-item-thumbnail">
                <img className="Landing-item-thumbnail-compare" src={compare} alt="compare"/>
              </div>
              <div className="Landing-item-title">Compare projects by stats</div>
              <div>
                <a className="Landing-button" href="#compare">Compare</a>
              </div>
            </div>
            <div className="Landing-item">
              <div className="Landing-item-thumbnail">
                <img className="Landing-item-thumbnail-graph" src={graph} alt="graph"/>
              </div>
              <div className="Landing-item-title">Explore big projects stats</div>
              <div>
                <a className="Landing-button" href="#chart">Explore</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;

import React, { Component } from 'react';

import "./index.css";
import compare from "./compare.svg";
import graph from "./graph.svg";

class Landing extends Component {
  render() {
    return (
      <div className="Landing-container">
        <div className="Landing">
          <div className="Landing-title_container">
            <h1 className="Landing-title">Compare Javascript Open-source Projects</h1>
            <h2 className="Landing-title_subtitle">by npm downloads, GitHub stars and other stats</h2>
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

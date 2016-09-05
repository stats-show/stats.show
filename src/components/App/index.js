import React, { Component } from 'react';
import Landing from '../Landing';
import CompareRatio from '../CompareRatio';
import RatioChart from '../RatioChart';

import "./index.css";


class App extends Component {
  render() {
    return (
      <div className="App-container">
        <div className="App">
          <Landing/>
          <CompareRatio />
          <RatioChart />
        </div>
      </div>
    );
  }
}

export default App;

import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router'
import App from './components/App';
import Landing from './components/Landing';
import CompareRatio from './components/CompareRatio';
import RatioChart from './components/RatioChart';
import './index.css';

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute  component={Landing} />
      <Route path="compare" component={CompareRatio} />
      <Route path="chart" component={RatioChart} />
    </Route>
  </Router>,
  document.getElementById('root')
);

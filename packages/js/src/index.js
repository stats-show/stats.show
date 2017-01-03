import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, IndexRedirect, Redirect, hashHistory } from 'react-router'
import App from './components/App';
import Landing from './components/Landing';
import CompareRatio from './components/CompareRatio';
import RatioChart from './components/RatioChart';
import './index.css';

import 'octicons/build/font/octicons.css';

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Landing} />
      <Route path="compare">
        <IndexRedirect to="tiles" />
        <Route path=":view" component={CompareRatio}/>
      </Route>
      <Route path="chart" component={RatioChart} />
      <Redirect from="*" to="/" />
    </Route>
  </Router>,
  document.getElementById('root')
);

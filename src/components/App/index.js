import React, { Component } from 'react';
import { Link, IndexLink } from 'react-router';
import { IntlProvider } from 'react-intl';
import GithubButton from '../GithubButton';
import TwitterButton from '../TwitterButton';

import "./index.css";

class App extends Component {
  render() {
    return (
      <IntlProvider locale="en">
        <div className="App-container">
         <div className="App-nav">
            <IndexLink className="App-nav-link" activeClassName="App-nav-link__active" to="">Home</IndexLink>
            <Link className="App-nav-link" activeClassName="App-nav-link__active" to="/compare">Compare</Link>
            <Link className="App-nav-link" activeClassName="App-nav-link__active" to="/chart">Explore</Link>
            <TwitterButton />
            <GithubButton />
          </div>
          <div className="App">
            { this.props.children }
          </div>
        </div>
      </IntlProvider>
    );
  }
}

export default App;

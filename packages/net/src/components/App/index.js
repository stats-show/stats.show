import React, { Component } from "react";
import { IntlProvider } from "react-intl";
import GithubButton from "../GithubButton";
import TwitterButton from "../TwitterButton";

import "./index.css";

class App extends Component {
  render() {
    return (
      <IntlProvider locale="en">
        <div className="App-container">
          <div className="App-nav">
            <TwitterButton />
            <GithubButton />
          </div>
          <div className="App">
            {this.props.children}
          </div>
        </div>
      </IntlProvider>
    );
  }
}

export default App;

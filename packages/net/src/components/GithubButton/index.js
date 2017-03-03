import React, { Component } from "react";

import "./index.css";

class GithubButton extends Component {
  render() {
    return (
      <div className="github-button-container github-header-button">
        <a
          className="github-button"
          href="https://github.com/stats-show/stats.show"
          data-icon="octicon-star"
          data-style="mega"
          data-count-href="/stats-show/stats.show/stargazers"
          data-count-api="/repos/stats-show/stats.show#stargazers_count"
          data-count-aria-label="# stargazers on GitHub"
          aria-label="Star stats-show/stats.show on GitHub"
        >
          Star
        </a>
      </div>
    );
  }
}

export default GithubButton;

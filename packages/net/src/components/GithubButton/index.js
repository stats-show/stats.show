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
          data-count-href="/StarRatio/star-ratio/stargazers"
          data-count-api="/repos/StarRatio/star-ratio#stargazers_count"
          data-count-aria-label="# stargazers on GitHub"
          aria-label="Star StarRatio/star-ratio on GitHub"
        >
          Star
        </a>
      </div>
    );
  }
}

export default GithubButton;

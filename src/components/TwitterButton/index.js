import React, { Component } from 'react';

import "./index.css";

class TwitterButton extends Component {
  render() {
    return (
      <div className="twitter-button-container twitter-header-button">
       <a
        href="https://twitter.com/share"
        className="twitter-share-button"
        data-size="large"
        data-text="Handy tool to compare #javascript #opensource projects"
        data-via="StarRatioJS"
        data-show-count="false">
        Tweet
      </a>
      </div>
    );
  }
}

export default TwitterButton;
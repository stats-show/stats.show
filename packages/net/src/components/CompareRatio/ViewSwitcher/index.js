import React, { Component } from "react";
import { withRouter, Link } from "react-router";
import "./index.css";

class ViewSwitcher extends Component {
  render() {
    const { query } = this.props;
    return (
      <div className="ViewSwitcher">
        <span className="ViewSwitcher-items">
          <Link
            className="ViewSwitcher-link"
            activeClassName="ViewSwitcher-link__active"
            to={{ pathname: "/tiles", query: query }}
          >
            Tiles
          </Link>
          <Link
            className="ViewSwitcher-link"
            activeClassName="ViewSwitcher-link__active"
            to={{ pathname: "/table", query: query }}
          >
            Table
          </Link>
        </span>
      </div>
    );
  }
}

export default withRouter(ViewSwitcher);

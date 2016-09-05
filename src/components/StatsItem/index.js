import React, { Component } from 'react';
import { FormattedNumber } from 'react-intl';
import ReactTooltip from 'react-tooltip'
import moment from 'moment';

import './index.css';

import 'octicons/build/font/octicons.css';

class StatsItem extends Component {
  render() {
    const { data } = this.props;
    const issueTtlText = moment.duration(data.issueTtl).humanize();
    const pullRequestTtlText = moment.duration(data.pullRequestTtl).humanize();
    const lastCommitText = moment(data.lastCommit).fromNow();
    return (
      <div className="StatsItem">
        <div className="StatsItem-header">
          <div className="name">
            <a className="name-link" href={`https://github.com/${data.user}/${data.repo}`} target="_blank" rel="nofollow">
              <span>{data.user}</span>/<span className="name">{data.repo}</span>
            </a>
          </div> 
        </div>
        <div className="StatsItem-content">
          <div>
            <div data-tip="npm downloads">
              <span className="octicon octicon-cloud-download"></span>
              <FormattedNumber value={data.downloads}/>
            </div>
            <div data-tip="github stars">
              <span className="octicon octicon-star"></span>
              <FormattedNumber value={data.stars} />
            </div>
          </div>
          <div>
            <div data-tip="issues opened during last 2 weeks">
              <span className="octicon octicon-issue-opened"></span>
              <FormattedNumber value={data.openedIssues}/>
            </div>
            <div data-tip="issues closed during last 2 weeks">
              <span className="octicon octicon-issue-closed"></span>
              <FormattedNumber value={data.closedIssues}/>
            </div>
          </div>
          <div> 
            <div data-tip="pull requests opened during last 2 weeks">
              <span className="octicon octicon-git-branch"></span>
              <FormattedNumber value={data.mergedPullRequests}/>
            </div>
            <div data-tip="pull requests closed during last 2 weeks">
              <span className="octicon octicon-git-pull-request"></span>
              <FormattedNumber value={data.openedPullRequests}/>
            </div>
          </div>
        </div>
        <div className="StatsItem-summary">
          <div className="StatsItem-summary-icons">
            <div data-tip="average time to close issue">
              <span className="octicon octicon-issue-opened"></span>
              <span className="octicon octicon-arrow-right"></span>
              <span className="octicon octicon-issue-closed"></span>
            </div>
            <div data-tip="average time to close pull request">
              <span className="octicon octicon-git-branch"></span>
              <span className="octicon octicon-arrow-right"></span>
              <span className="octicon octicon-git-pull-request"></span>
            </div>
            <div data-tip="last commit">
              Last <span className="octicon octicon-git-commit"></span>
            </div>
          </div>
          <div>
            <div className="text">
              <span>about {issueTtlText}</span>
            </div>
            <div className="text">
              <span>about {pullRequestTtlText}</span>
            </div>
            <div className="text">
              <span>was {lastCommitText}</span>
            </div>
          </div>
        </div>
        <div className="StatsItem-footer">
          <span data-tip="StarRatio index (Coming soon)">🌟--</span>
        </div>
        <ReactTooltip place="bottom" />
      </div>
    );
  }
}



export default StatsItem;

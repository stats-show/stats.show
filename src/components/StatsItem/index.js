import React, { Component } from 'react';
import { FormattedNumber } from 'react-intl';
import ReactTooltip from 'react-tooltip';
import { fieldTooltips } from '../../constants';
import { durationToString, dateDiffFromNowToString } from '../../utils';

import './index.css';

class StatsItem extends Component {
  render() {
    const { data } = this.props;
    return (
      <div className="StatsItem">
        <div className="StatsItem-header">
          <a className="name-link" href={`https://github.com/${data.user}/${data.repo}`} target="_blank" rel="nofollow">
            <span className="name username">{data.user}</span>
            <span className="name reponame">{data.repo}</span>
          </a>
        </div>
        <div className="StatsItem-content">
          <div>
            <div data-tip={fieldTooltips['downloads']}>
              <span className="octicon octicon-cloud-download"></span>
              { data.downloads ? <FormattedNumber value={data.downloads}/> : <span>-</span> } 
            </div>
            <div data-tip={fieldTooltips['stars']}>
              <span className="octicon octicon-star"></span>
              <FormattedNumber value={data.stars} />
            </div>
          </div>
          <div>
            <div data-tip={fieldTooltips['openedIssues']}>
              <span className="octicon octicon-issue-opened"></span>
              <FormattedNumber value={data.openedIssues}/>
            </div>
            <div data-tip={fieldTooltips['closedIssues']}>
              <span className="octicon octicon-issue-closed"></span>
              <FormattedNumber value={data.closedIssues}/>
            </div>
          </div>
          <div> 
            <div data-tip={fieldTooltips['openedPullRequests']}>
              <span className="octicon octicon-git-branch"></span>
              <FormattedNumber value={data.openedPullRequests}/>
            </div>
            <div data-tip={fieldTooltips['mergedPullRequests']}>
              <span className="octicon octicon-git-pull-request"></span>
              <FormattedNumber value={data.mergedPullRequests}/>
            </div>
          </div>
          <div> 
            <div data-tip={fieldTooltips['commitsCount']}>
              <span className="octicon octicon-git-commit"></span>
              <FormattedNumber value={data.commitsCount}/>
            </div>
            <div data-tip={fieldTooltips['contributors']}>
              <span className="octicon octicon-organization"></span>
              <FormattedNumber value={data.contributors}/>
            </div>
          </div>
        </div>
        <div className="StatsItem-summary">
          <div className="StatsItem-summary-icons">
            <div data-tip={fieldTooltips['issueTtl']}>
              <span className="octicon octicon-issue-opened"></span>
              <span className="octicon octicon-arrow-right"></span>
              <span className="octicon octicon-issue-closed"></span>
            </div>
            <div data-tip={fieldTooltips['pullRequestTtl']}>
              <span className="octicon octicon-git-branch"></span>
              <span className="octicon octicon-arrow-right"></span>
              <span className="octicon octicon-git-pull-request"></span>
            </div>
            <div data-tip={fieldTooltips['lastCommit']}>
              Last <span className="octicon octicon-git-commit"></span>
            </div>
          </div>
          <div>
            <div className="text">
              <span>{durationToString(data.issueTtl)}</span>
            </div>
            <div className="text">
              <span>{durationToString(data.pullRequestTtl)}</span>
            </div>
            <div className="text">
              <span>{dateDiffFromNowToString(data.lastCommit)}</span>
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

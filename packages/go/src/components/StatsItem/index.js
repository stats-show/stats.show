import React, { Component } from 'react';
import { FormattedNumber } from 'react-intl';
import ReactTooltip from 'react-tooltip';
import fieldTooltips from '../../constants/fieldTooltips';
import { durationToString, dateDiffFromNowToString } from '../../utils';

import './index.css';

class StatsItem extends Component {
  render() {
    const { data } = this.props;
    return (
      <div className="StatsItem">
        <div className="StatsItem-header">
          <a
            className="name-link"
            href={`https://github.com/${data.user}/${data.repo}`}
            target="_blank"
            rel="nofollow"
          >
            <span className="name username">{data.user}</span>
            <span className="name reponame">{data.repo}</span>
          </a>
        </div>
        <div className="StatsItem-content">
          <div>
            <div data-tip={fieldTooltips['imports']}>
              <span className="octicon octicon-link" />
              {data.imports
                ? <FormattedNumber value={data.imports} />
                : <span>-</span>}
            </div>
            <div data-tip={fieldTooltips['stars']}>
              <span className="octicon octicon-star" />
              <FormattedNumber value={data.stars} />
            </div>
          </div>
          <div>
            <div data-tip={fieldTooltips['openedIssues']}>
              <span className="octicon octicon-issue-opened" />
              <FormattedNumber value={data.openedIssues} />
            </div>
            <div data-tip={fieldTooltips['closedIssues']}>
              <span className="octicon octicon-issue-closed" />
              <FormattedNumber value={data.closedIssues} />
            </div>
          </div>
          <div>
            <div data-tip={fieldTooltips['openedPullRequests']}>
              <span className="octicon octicon-git-branch" />
              <FormattedNumber value={data.openedPullRequests} />
            </div>
            <div data-tip={fieldTooltips['mergedPullRequests']}>
              <span className="octicon octicon-git-pull-request" />
              <FormattedNumber value={data.mergedPullRequests} />
            </div>
          </div>
          <div>
            <div data-tip={fieldTooltips['commitsCount']}>
              <span className="octicon octicon-git-commit" />
              <FormattedNumber value={data.commitsCount} />
            </div>
            <div data-tip={fieldTooltips['contributors']}>
              <span className="octicon octicon-organization" />
              <FormattedNumber value={data.contributors} />
            </div>
          </div>
        </div>
        <div className="StatsItem-summary">
          <div className="StatsItem-summary-icons">
            <div data-tip={fieldTooltips['issueTtl']}>
              <span className="octicon octicon-issue-opened" />
              <span className="octicon octicon-arrow-right" />
              <span className="octicon octicon-issue-closed" />
            </div>
            <div data-tip={fieldTooltips['pullRequestTtl']}>
              <span className="octicon octicon-git-branch" />
              <span className="octicon octicon-arrow-right" />
              <span className="octicon octicon-git-pull-request" />
            </div>
            <div data-tip={fieldTooltips['lastCommit']}>
              Last <span className="octicon octicon-git-commit" />
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
          <span data-tip="Index (Coming soon)">🌟--</span>
        </div>
        <ReactTooltip place="bottom" />
      </div>
    );
  }
}

export default StatsItem;

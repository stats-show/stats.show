import React, { PropTypes, Component } from 'react';
import { Table, Thead, Th, Tr, Td, Tfoot } from 'reactable';
import { FormattedNumber } from 'react-intl';
import ReactTooltip from 'react-tooltip';
import Button from '../../Button';
import { bindClass, durationToString, dateDiffFromNowToString } from '../../../utils';
import { fieldTooltips } from '../../../constants';

import './index.css';

class TableView extends Component {
  constructor(props) {
    super(props);
    bindClass(this);
  }

  render() {
    const { keys, data, handleRemove } = this.props;
    const dataItems = keys.map((item) => {return { key: item, item: data[item]};});
    const sortableColumns = [
      'name',
      'downloads',
      'stars',
      'openedIssues',
      'closedIssues',
      'openedPullRequests',
      'mergedPullRequests',
      'commitsCount',
      'contributors',
      'issueTtl',
      'pullRequestTtl',
      'lastCommit'
    ];
    return (
      <div className="TableView">
        <Table className="TableView-table" sortable={sortableColumns}>
          <Thead>
            <Th column="name">
              <strong className="name-header">name</strong>
            </Th>
            <Th column="downloads">
              <span className="octicon octicon-cloud-download" data-tip={fieldTooltips['downloads']}></span>
            </Th>
            <Th column="stars">
              <span className="octicon octicon-star" data-tip={fieldTooltips['stars']}></span>
            </Th>
            <Th column="openedIssues">
              <span className="octicon octicon-issue-opened" data-tip={fieldTooltips['openedIssues']}></span>
            </Th>
            <Th column="closedIssues">
              <span className="octicon octicon-issue-closed" data-tip={fieldTooltips['closedIssues']}></span>
            </Th>
            <Th column="openedPullRequests">
              <span className="octicon octicon-git-branch" data-tip={fieldTooltips['openedPullRequests']}></span>
            </Th>
            <Th column="mergedPullRequests">
              <span className="octicon octicon-git-pull-request" data-tip={fieldTooltips['mergedPullRequests']}></span>
            </Th>
            <Th column="commitsCount">
              <span className="octicon octicon-git-commit" data-tip={fieldTooltips['commitsCount']}></span>
            </Th>
            <Th column="contributors">
              <span className="octicon octicon-organization" data-tip={fieldTooltips['contributors']}></span>
            </Th>
            <Th column="issueTtl">
              <span className="octicon octicon-issue-opened"></span>
              <span className="octicon octicon-arrow-right"></span>
              <span className="octicon octicon-issue-closed"></span>
            </Th>
            <Th column="pullRequestTtl">
              <span className="octicon octicon-git-branch"></span>
              <span className="octicon octicon-arrow-right"></span>
              <span className="octicon octicon-git-pull-request"></span>
            </Th>
            <Th column="lastCommit">
              Last <span className="octicon octicon-git-commit"></span>
            </Th>
            <Th column="actions"><span></span></Th>
          </Thead>
          { dataItems.map((({key, item}) => 
            <Tr key={`${item.user}/${item.repo}`}>
              <Td column="name" vale={`${item.user}/${item.repo}`}>
                <a className="TableView-name-link" href={`https://github.com/${item.user}/${item.repo}`} target="_blank" rel="nofollow">
                  {`${item.user}/${item.repo}`}
                </a>
              </Td>
              <Td column="downloads" value={item.downloads || 0}>
                { item.downloads ? <FormattedNumber value={item.downloads}/> : <span>-</span> } 
              </Td>
              <Td column="stars" value={item.stars}>
                <FormattedNumber value={item.stars} />
              </Td>
              <Td column="openedIssues" value={item.openedIssues}>
                <FormattedNumber value={item.openedIssues} />
              </Td>
              <Td column="closedIssues" value={item.closedIssues}>
                <FormattedNumber value={item.closedIssues} />
              </Td>
              <Td column="openedPullRequests" value={item.openedPullRequests}>
                <FormattedNumber value={item.openedPullRequests} />
              </Td>
              <Td column="mergedPullRequests" value={item.mergedPullRequests}>
                <FormattedNumber value={item.mergedPullRequests} />
              </Td>
              <Td column="commitsCount" value={item.commitsCount}>
                <FormattedNumber value={item.commitsCount} />
              </Td>
              <Td column="contributors" value={item.contributors}>
                <FormattedNumber value={item.contributors} />
              </Td>
              <Td column="issueTtl" value={item.issueTtl}>
                <span>{durationToString(item.issueTtl)}</span>
              </Td>
              <Td column="pullRequestTtl" value={item.pullRequestTtl.toString()}>
                <span>{durationToString(item.pullRequestTtl)}</span>
              </Td>
              <Td column="lastCommit" value={item.lastCommit}>
                <span>{dateDiffFromNowToString(item.lastCommit)}</span>
              </Td>
              <Td column="actions">
                <Button className="TableView-item-remove"
                  handleClick={handleRemove}
                  payload={key}>
                X
                </Button>
              </Td>
            </Tr>
          ))}
          <Tfoot className="reactable-tfoot">
            <tr>
              <td></td>
            </tr>
          </Tfoot>
        </Table>
        <ReactTooltip place="bottom" />
      </div>
    );
  }
}

TableView.propTypes = {
  handleRemove: PropTypes.func.isRequired,
  keys: PropTypes.array.isRequired,
  data: PropTypes.object.isRequired
};

export default TableView;
import React, { PropTypes, Component } from 'react';
import { Table, Thead, Th, Tr, Td, Tfoot } from 'reactable';
import { FormattedNumber } from 'react-intl';
import ReactTooltip from 'react-tooltip';
import Button from '../../Button';
import {
  bindClass,
  durationToString,
  dateDiffFromNowToString
} from '../../../utils';
import fieldTooltips from '../../../constants/fieldTooltips';

import './index.css';

class TableView extends Component {
  constructor(props) {
    super(props);
    bindClass(this);
  }

  render() {
    const { keys, data, handleRemove } = this.props;
    const dataItems = keys.map(item => {
      return { key: item, item: data[item] };
    });
    const sortableColumns = [
      'name',
      'imports',
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
            <Th column="imports">
              <span
                className="octicon octicon-link"
                data-tip={fieldTooltips['imports']}
              />
            </Th>
            <Th column="stars">
              <span
                className="octicon octicon-star"
                data-tip={fieldTooltips['stars']}
              />
            </Th>
            <Th column="openedIssues">
              <span
                className="octicon octicon-issue-opened"
                data-tip={fieldTooltips['openedIssues']}
              />
            </Th>
            <Th column="closedIssues">
              <span
                className="octicon octicon-issue-closed"
                data-tip={fieldTooltips['closedIssues']}
              />
            </Th>
            <Th column="openedPullRequests">
              <span
                className="octicon octicon-git-branch"
                data-tip={fieldTooltips['openedPullRequests']}
              />
            </Th>
            <Th column="mergedPullRequests">
              <span
                className="octicon octicon-git-pull-request"
                data-tip={fieldTooltips['mergedPullRequests']}
              />
            </Th>
            <Th column="commitsCount">
              <span
                className="octicon octicon-git-commit"
                data-tip={fieldTooltips['commitsCount']}
              />
            </Th>
            <Th column="contributors">
              <span
                className="octicon octicon-organization"
                data-tip={fieldTooltips['contributors']}
              />
            </Th>
            <Th column="issueTtl">
              <span data-tip={fieldTooltips['issueTtl']}>
                <span className="octicon octicon-issue-opened" />
                <span className="octicon octicon-arrow-right" />
                <span className="octicon octicon-issue-closed" />
              </span>
            </Th>
            <Th column="pullRequestTtl">
              <span data-tip={fieldTooltips['issueTtl']}>
                <span className="octicon octicon-git-branch" />
                <span className="octicon octicon-arrow-right" />
                <span className="octicon octicon-git-pull-request" />
              </span>
            </Th>
            <Th column="lastCommit">
              <span data-tip={fieldTooltips['lastCommit']}>
                Last <span className="octicon octicon-git-commit" />
              </span>
            </Th>
            <Th column="actions"><span /></Th>
          </Thead>
          {dataItems.map(({ key, item }) => (
            <Tr key={`${item.user}/${item.repo}`}>
              <Td column="name" vale={`${item.user}/${item.repo}`}>
                <a
                  className="TableView-name-link"
                  href={`https://github.com/${item.user}/${item.repo}`}
                  target="_blank"
                  rel="nofollow"
                >
                  {`${item.user}/${item.repo}`}
                </a>
              </Td>
              <Td column="imports" value={item.imports || 0}>
                {item.imports
                  ? <FormattedNumber value={item.imports} />
                  : <span>-</span>}
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
              <Td
                column="pullRequestTtl"
                value={item.pullRequestTtl.toString()}
              >
                <span>{durationToString(item.pullRequestTtl)}</span>
              </Td>
              <Td column="lastCommit" value={item.lastCommit}>
                <span>{dateDiffFromNowToString(item.lastCommit)}</span>
              </Td>
              <Td column="actions">
                <Button
                  className="TableView-item-remove"
                  handleClick={handleRemove}
                  payload={key}
                >
                  X
                </Button>
              </Td>
            </Tr>
          ))}
          <Tfoot className="reactable-tfoot">
            <tr>
              <td />
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

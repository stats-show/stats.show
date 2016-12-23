import links from '../comparisons/comparisons.json';

const names = {
  frontend_framework: 'Frontend frameworks',
  backend_framework: 'Backend frameworks',
  bundler: 'Bundlers',
  styles: 'Styles',
  language: 'Languages',
  testing_framework: 'Testing frameworks',
  data_visualization: 'Data visualization',
  react_components: 'React components',
  other: 'Other',
};

const fieldNames = {
  downloads: 'npm downloads (last week)',
  stars: 'GitHub stars',
  openedIssues: 'new issues',
  closedIssues: 'closed issues',
  issueTtl: 'issue lifetime (days)',
  openedPullRequests: 'new pull requests',
  mergedPullRequests: 'merged pull requests',
  pullRequestTtl: 'pull request lifetime (days)',
};

const fieldTooltips = {
  downloads: 'npm downloads (last week)',
  stars: 'GitHub stars',
  openedIssues: 'issues opened during last 2 weeks',
  closedIssues: 'issues closed during last 2 weeks',
  issueTtl: 'average time to close issue',
  openedPullRequests: 'pull requests opened during last 2 weeks',
  mergedPullRequests: 'pull requests closed during last 2 weeks',
  pullRequestTtl: 'average time to close pull request',
  commitsCount: 'commits during last 2 weeks',
  contributors: 'contributors during last 2 weeks',
  lastCommit: 'last commit'
};

const colorNames = [
    'red',
    'pink',
    'purple',
    'deepPurple',
    'indigo',
    'blue',
    'lightBlue',
    'cyan',
    'teal',
    'green',
    'lightGreen',
    'lime',
    'yellow',
    'amber',
    'orange',
    'deepOrange',
    'brown',
    'grey',
    'blueGrey'
  ];

// const apiUrl = 'http://localhost:3001/api/';
const apiUrl = 'http://u01.westeurope.cloudapp.azure.com/api';

const keysSeparator = ",";
export {
  names,
  colorNames,
  fieldNames,
  fieldTooltips,
  apiUrl,
  keysSeparator,
  links
};
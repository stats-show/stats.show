const names = {
  frontend_framework: 'Frontend frameworks',
  backend_framework: 'Backend frameworks',
  bundler: 'Bundlers',
  styles: 'Styles',
  language: 'Languages',
  testing_framework: 'Testing frameworks',
  data_visualization: 'Data visualization',
  other: 'Other',
};

const colors = {
  frontend_framework: '#1b9e77',
  backend_framework: '#d95f02',
  bundler: '#7570b3',
  styles: '#e7298a',
  language: '#66a61e',
  testing_framework: '#e6ab02',
  data_visualization: '#a6761d',
  other: '#666666'
};

const fieldNames = {
  downloads: 'npm downloads (in the last week)',
  stars: 'GitHub stars',
  openedIssues: 'new issues',
  closedIssues: 'closed issues',
  issueTtl: 'issue lifetime (days)',
  openedPullRequests: 'new pull requests',
  mergedPullRequests: 'merged pull requests',
  pullRequestTtl: 'pull request lifetime (days)',
};

// const apiUrl = 'http://localhost:3001/api/';
const apiUrl = 'http://dz1.westus.cloudapp.azure.com/api';

export {
  names,
  colors,
  fieldNames,
  apiUrl
};
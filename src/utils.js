import githubUrl from 'parse-github-url';
import moment from 'moment';

function getRepositoryName(url) {
  const data = githubUrl(url);
  return data ? data.repository : null;
}

function durationToString(duration) {
  return duration ? 'about ' + moment.duration(duration).humanize() : 'not available';
}

function dateDiffFromNowToString(date) {
  return 'was ' + moment(date).fromNow();
}

function bindClass(classToBind) {
  Object.getOwnPropertyNames(classToBind.constructor.prototype)
    .filter((prop) => typeof classToBind[prop] === 'function' && prop !== 'constructor')
    .forEach((method) => (classToBind[method] = classToBind[method].bind(classToBind)));
}

export {
  getRepositoryName,
  bindClass,
  durationToString,
  dateDiffFromNowToString
}
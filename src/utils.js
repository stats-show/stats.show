import githubUrl from 'parse-github-url';

function getRepositoryName(url) {
  const data = githubUrl(url);
  return data ? data.repository : null;
}

function bindClass(classToBind) {
  Object.getOwnPropertyNames(classToBind.constructor.prototype)
    .filter((prop) => typeof classToBind[prop] === 'function' && prop !== 'constructor')
    .forEach((method) => (classToBind[method] = classToBind[method].bind(classToBind)));
}

export {
  getRepositoryName,
  bindClass
}
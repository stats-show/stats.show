import githubUrl from "parse-github-url";
import moment from "moment";
import * as colors from "material-colors";
import colorNames from "./constants/colorNames";

const colorsCount = colorNames.length;

function getRepositoryName(url) {
  const data = githubUrl(url);
  return data ? data.repository : null;
}

function durationToString(duration) {
  return duration
    ? "about " + moment.duration(duration).humanize()
    : "not available";
}

function dateDiffFromNowToString(date) {
  return "was " + moment(date).fromNow();
}

function bindClass(classToBind) {
  Object.getOwnPropertyNames(classToBind.constructor.prototype)
    .filter(
      prop => typeof classToBind[prop] === "function" && prop !== "constructor"
    )
    .forEach(
      method => classToBind[method] = classToBind[method].bind(classToBind)
    );
}

function getColorByIndex(index) {
  const initialValue = index * 3;
  const colorPage = initialValue > 0
    ? Math.floor(initialValue / colorsCount)
    : 0;
  const colorIndex = initialValue - colorPage * colorsCount;
  const colorName = colorNames[colorIndex];
  return colors[colorName][700 - colorPage * 200];
}

export {
  getRepositoryName,
  bindClass,
  durationToString,
  dateDiffFromNowToString,
  getColorByIndex
};

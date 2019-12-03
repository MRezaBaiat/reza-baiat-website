const isEqual = require('react-fast-compare');

export function shouldComponentUpdate (prevProps, nextProps) {
  return !isEqual(prevProps, nextProps);
}

export function formatDate (date) {
  var d = new Date(date);
  var month = '' + (d.getMonth() + 1);
  var day = '' + d.getDate();
  var year = d.getFullYear();

  if (month.length < 2) { month = '0' + month; }
  if (day.length < 2) { day = '0' + day; }

  return [year, month, day].join('-');
}

export function getCSSRootValue (valueName: string) {
  return getComputedStyle(document.documentElement).getPropertyValue(valueName);
}

export function cssValueToPixel (value: string) {
  return document.documentElement.clientHeight * 0.65;
}

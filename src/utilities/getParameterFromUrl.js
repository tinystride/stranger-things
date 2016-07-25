export default function(parameter, url) {
  if (!url) { return null; }

  let _parameter = parameter.replace(/[\[\]]/g, '\\$&');
  let regex = new RegExp('[?&]' + _parameter + '(=([^&#]*)|&|#|$)');
  let results = regex.exec(url);

  if (!results) { return null; }
  if (!results[2]) { return ''; }

  return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

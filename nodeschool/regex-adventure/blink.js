module.exports = function (str) {
  var content = /@@([^@@]*)@@/.exec(str)[1]
  return `<blink>${content}</blink>`
}

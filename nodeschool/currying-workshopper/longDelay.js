var b = 0
function longFunc (a) {
  if (a) {
    b += a
    return longFunc
  } else {
    return b
  }
}

module.exports = longFunc

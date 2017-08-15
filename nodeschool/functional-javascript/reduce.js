function countWords (inputWords) {
  return inputWords.reduce((acc, cur) => {
    acc[cur] = acc[cur] + 1 || 1
    return acc
  }, {})
}

module.exports = countWords

var _ = require('lodash')

module.exports = function (collection) {
  return _.reduce(collection, (acc, elem, key) => {
    if (_.every(elem, e => e > 19)) {
      acc.hot.push(key)
    } else if (_.some(elem, e => e > 19)) {
      acc.warm.push(key)
    }
    return acc
  }, { hot: [], warm: [] })
}

var _ = require('lodash')

module.exports = function (arr) {
  return _.chain(arr)
    .map(elem => `${elem}chained`.toUpperCase())
    .sortBy()
}

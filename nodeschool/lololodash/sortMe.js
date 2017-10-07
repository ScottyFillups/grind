var _ = require('lodash')

module.exports = function (list) {
  return _.sortBy(list, 'quantity').reverse()
}

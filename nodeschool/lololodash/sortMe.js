var _ = require('lodash')

module.exports = function (list) {
  return _.sortBy(list, 'quantity').reverse()
}

// alternative solution: item => -item.quality
// I suppose it's more efficient, imho it looks hacky

const _ = require('lodash')

const worker = function (args) {
  return _.sortBy(args, item => -item.quantity)
}

module.exports = worker

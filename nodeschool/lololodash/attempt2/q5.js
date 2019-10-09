const _ = require('lodash')

const worker = function (args) {
  return _.chain(args)
    .map(s => s.toUpperCase() + 'CHAINED')
    .sort()
}

module.exports = worker

const _ = require('lodash')

const worker = function (args) {
  return _.filter(args, { active: true })
}

module.exports = worker

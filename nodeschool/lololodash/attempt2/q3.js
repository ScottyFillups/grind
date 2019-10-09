const _ = require('lodash')

const worker = function (args) {
  _.forEach(args, (item) => {
    if (item.population > 1) {
      item.size = 'big'
    } else if (item.population > 0.5) {
      item.size = 'med'
    } else {
      item.size = 'small'
    }
  })

  return args
}

module.exports = worker

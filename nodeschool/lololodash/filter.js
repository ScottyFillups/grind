var _ = require('lodash')

module.exports = function (collection) {
  var avg = _.reduce(collection, (acc, item) => {
    return acc + item.income
  }, 0) / _.size(collection)
  var sortedCltn = _.sortBy(collection, 'income')
  var underperf = _.filter(sortedCltn, e => e.income <= avg)
  var overperf = _.filter(sortedCltn, e => e.income > avg)
  
  return {
    average: avg,
    underperform: underperf,
    overperform: overperf
  }
}

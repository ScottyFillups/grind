var _ = require('lodash')

module.exports = function (collection) {
  var average = _.reduce(collection, (acc, item) => {
    return acc + item.income
  }, 0) / _.size(collection)
  var underperf = _.chain(collection)
    .filter(freelancer => {
      return freelancer.income <= average
        ? true
        : false
    })
    .sortBy('income')
  var overperf = _.chain(collection)
    .filter(freelancer => {
      return freelancer.income > average
        ? true
        : false
    })
    .sortBy('income')

  return {
    average: average,
    underperform: underperf,
    overperform: overperf
  }
}


// A few things to improve:
// - Redundant ternary; just return freelancer.income > average
// - Sort the entire list initially to avoid sorting sublists

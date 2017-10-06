var _ = require('lodash')

module.exports = function (collection) {
  var temp = {
    hot: [],
    warm: []
  }

  _.forEach(collection, function (temps, city) {
    if (_.every(temps, e => e > 19)) {
      temp.hot.push(city)
    } else if (_.some(temps, e => e > 19)) {
      temp.warm.push(city)
    }
  })

  return temp
}

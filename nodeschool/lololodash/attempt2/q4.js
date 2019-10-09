const _ = require('lodash')

const worker = function (cities) {
  const citiesByTemp = {
    hot: [],
    warm: []
  }
  // Can use lodash forEach
  // Don't duplicate the lambda
  for (let cityName in cities) {
    const cityTemps = cities[cityName]
    if (_.every(cityTemps, temp => temp > 19)) {
      citiesByTemp.hot.push(cityName)
    } else if (_.some(cityTemps, temp => temp > 19)) {
      citiesByTemp.warm.push(cityName)
    }
  }
  return citiesByTemp
}

module.exports = worker

var _ = require('lodash')

function getSize (pop) {
  if (pop > 1) {
    return 'big'
  } else if (pop > 0.5) {
    return 'med'
  }
  return 'small'
}

module.exports = function (collection) {
  return _.forEach(collection, function (item, key) {
    item.size = getSize(item.population)
  })
}

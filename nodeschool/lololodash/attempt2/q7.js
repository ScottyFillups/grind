var _ = require('lodash')

module.exports = function (collection) {
  return _.chain(collection)
    .groupBy('article')
    .map((orders, article) => {
      var total = orders.reduce((acc, order) => {
        return acc + order.quantity
      }, 0)
      return {
        article: Number(article),
        total_orders: total
      }
    })
    .sortBy('total_orders')
    .reverse()
}

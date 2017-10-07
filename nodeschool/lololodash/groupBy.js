var _ = require('lodash')

module.exports = function (collection) {
  return _.chain(collection)
    .groupBy('username')
    .map((item, key) => {
      return {
        username: key,
        comment_count: _.size(item)
      }
    })
    .sortBy('comment_count')
    .reverse()
}

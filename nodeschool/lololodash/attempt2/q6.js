const _ = require('lodash')

const worker = function (args) {
  const grouped = _.groupBy(args, 'username')
  const commentCount = []
  // If one-to-one mapping, use .map
  // Try to chain things
  // don't hesistate to use .reverse() -> looks cleaner?
  _.forEach(grouped, (item, key) => {
    commentCount.push({
      username: key,
      comment_count: item.length
    })
  })
  return _.sortBy(commentCount, item => -item.comment_count)
}

module.exports = worker

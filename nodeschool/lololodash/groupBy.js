var _ = require('lodash')

module.exports = function (collection) {
  var userComments = []
  var grouped = _.groupBy(collection, 'username')
  _.forEach(grouped, (item, key) => {
    userComments.push({
      username: key,
      comment_count: _.size(item)
    })
  })

  return _.chain(userComments)
    .sortBy('comment_count')
    .reverse()
}

// Alternate solution with chains
// (What I originally tried to do)
//
// ISSUE: forEach transforms array, map returns a new arr
//        use map next time
//
// return _.chain(collection)
//  .groupBy('username')
//  .map((item, name) => {
//    username: name,
//    comment_count: _.size(item)
//  })
//  .sortBy('comment_count')
//  .reverse()
//

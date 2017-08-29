var url = 'mongodb://localhost:27017/learnyoumongo'
var sizeFilter = process.argv[2]
var mongo = require('mongodb').MongoClient
mongo.connect(url, (err, db) => {
  var parrots = db.collection('prices')
  parrots.aggregate([
    { $match: { size: sizeFilter}},
    { $group: {
      _id: 'avg',
      avg: {
        $avg: '$price'
      }
    }}
  ]).toArray((err, res) => {
    console.log(Number(res[0].avg).toFixed(2))
    db.close()
  })
})

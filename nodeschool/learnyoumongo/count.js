var url = 'mongodb://localhost:27017/learnyoumongo'
var age = parseInt(process.argv[2])
var mongo = require('mongodb').MongoClient
mongo.connect(url, (err, db) => {
  var parrots = db.collection('parrots')
  parrots.count({
    "age": {$gt: age}
  }, (err, count) => {
    console.log(count)
    db.close()
  })
})

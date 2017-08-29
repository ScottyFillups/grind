var url = 'mongodb://localhost:27017/learnyoumongo'
var age = parseInt(process.argv[2])
var mongo = require('mongodb').MongoClient
mongo.connect(url, (err, db) => {
  var parrots = db.collection('parrots')
  parrots.find({
    age: {$gt: age}
  }, {
    name: 1,
    age: 1,
    _id: 0
  }).toArray((err, docs) => {
    console.log(docs)
    db.close()
  })
})

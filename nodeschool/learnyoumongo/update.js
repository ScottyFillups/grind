var url = 'mongodb://localhost:27017/learnyoumongo'
var mongo = require('mongodb').MongoClient
mongo.connect(url, (err, db) => {
  var col = db.collection('users')
  col.update({
    username: "tinatime"
  }, {
    $set: {
      age: 40
    }
  }, (err) => {
    db.close()
  })
})

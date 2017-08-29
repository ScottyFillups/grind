var dbName = process.argv[2]
var collectionName = process.argv[3]
var idToDelete = process.argv[4]
var url = `mongodb://localhost:27017/${dbName}`
var mongo = require('mongodb').MongoClient
mongo.connect(url, (err, db) => {
  var col = db.collection(collectionName)
  col.remove({
    _id: idToDelete
  }, (err) => {
    db.close()
  })
})

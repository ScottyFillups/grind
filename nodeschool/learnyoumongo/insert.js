var url = 'mongodb://localhost:27017/learnyoumongo'
var fname = process.argv[2]
var lname = process.argv[3]
var mongo = require('mongodb').MongoClient
mongo.connect(url, (err, db) => {
  var col = db.collection('docs')
  var obj = {
    firstName: fname,
    lastName: lname
  }
  console.log(JSON.stringify(obj))
  col.insert(obj, (err, data) => {
    db.close()
  })
})

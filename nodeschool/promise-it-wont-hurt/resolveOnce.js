var promise = new Promise(function (fulfill, reject) {
  fulfill('I FIRED')
  reject(new Error('I DID NOT FIRE'))
})
  
promise.then(console.log, function (error) {
  console.log(error.message)
})

// you could also create a onReject helper for cleaner then

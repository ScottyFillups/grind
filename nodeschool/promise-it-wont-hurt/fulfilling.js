'use strict'

var promise = new Promise(function (fulfill, reject) {
  setTimeout(function () {
    fulfill('FULFILLED!') 
  }, 300)
})
.then(function (res) {
  console.log(res)
})

// you can also just do .then(console.log)

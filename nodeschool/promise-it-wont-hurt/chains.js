first().then(function (secret) {
  return second(secret)
})
.then(function (secret) {
  console.log(secret)
})

// alternatively, first().then(second).then(console.log)

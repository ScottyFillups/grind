var a = Promise.resolve('SUCCESS').then(console.log)
var b = Promise.reject(new Error('FAIL')).catch(onReject)

function onReject (error) {
  console.log(error.message)
}

// resolve vs then: 
// resolve is the same as doing function(f, r) { f('val') }
// then attaches as callback that handles resolved values

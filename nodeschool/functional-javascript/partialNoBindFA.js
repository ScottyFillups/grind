var slice = Array.prototype.slice
function logger (namespace) {
  return function () {
    var arr = slice.call(arguments)
    arr.unshift(namespace)
    console.log.apply(null, arr)
  }
}

module.exports = logger

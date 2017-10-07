// have an array that pushes args
// when the # of args is reached, do an apply

function currify (fn) {
  var args = []

  function curriedFn () {
    args = args.concat([].slice.call(arguments))
    if (args.length === fn.length) {
      var temp = args
      args = []
      return fn.apply(null, temp)
    } else {
      return curriedFn
    }
  }

  return curriedFn
}

module.exports = currify

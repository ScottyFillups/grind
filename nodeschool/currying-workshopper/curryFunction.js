// have an array that pushes args
// when the # of args is reached, do an apply

function currify (fn) {
  var args = []
  return function () {
    args = args.concat(arguments)
    // it's not fn.params, idk what it is
    if (args.length === fn.params.length) {
      return fn.apply(null, args)
    }
  }
}

module.exports = currify

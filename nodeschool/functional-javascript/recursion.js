function reduce (arr, fn, initial) {
  return (function reduceOne (i, val) {
    if (i > arr.length - 1) return val
    return reduceOne(i + 1, fn(val, arr[i], i, arr))
  })(0, initial)
}

module.exports = reduce

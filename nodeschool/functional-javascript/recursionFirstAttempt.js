function reduce (arr, fn, initial) {
  fn.count = fn.count || 0
  initial = fn(initial, arr[fn.count], fn.count, arr)
  fn.count++
  if (fn.count === arr.length) return initial
  return reduce(arr, fn, initial)
}

module.exports = reduce

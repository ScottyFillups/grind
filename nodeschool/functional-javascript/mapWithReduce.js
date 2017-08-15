module.exports = function arrayMap (arr, fn, thisArgs) {
  return arr.reduce((acc, cur, i) => {
    acc.push(fn.call(thisArgs, cur, i, arr))
    return acc
  }, [])
}

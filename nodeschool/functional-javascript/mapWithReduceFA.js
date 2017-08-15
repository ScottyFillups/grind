module.exports = function arrayMap (arr, fn) {
  return arr.reduce((acc, cur) => {
    acc.push(fn(cur))
    return acc
  }, [])
}

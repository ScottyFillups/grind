module.exports = function (str) {
  return /^[0-9]+\.(jpg|jpeg)$/.test(str)
}

// their solution (imho better)
// 
// module.exports = function (str) {
//   return /^\d+\.jpe?g$/.test(str)
// }

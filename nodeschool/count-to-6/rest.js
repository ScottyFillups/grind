module.exports = function (...args) {
  return args.reduce((acc, x) => acc + x, 0) / args.length
}

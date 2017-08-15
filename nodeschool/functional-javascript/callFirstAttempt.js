function duckCount () {
  return (function isDuck (args, i) {
    if (!args[i]) return 0
    var inc = args[i].quack ? 1 : 0
    return inc + isDuck(args, i + 1)
  })(arguments, 0)
}

module.exports = duckCount

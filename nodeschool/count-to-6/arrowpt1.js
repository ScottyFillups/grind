var inputs = process.argv.slice(2)
var result = inputs.map(x => x[0]).reduce((acc, x) => acc + x, '')
console.log(`[${inputs}] becomes "${result}"`)

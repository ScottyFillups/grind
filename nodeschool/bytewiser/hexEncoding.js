const pipe = (val) => (...fn) => fn.reduce((acc, cur) => cur(acc), val)

// original solution
/*
pipe(process.argv.slice(2)
  .map(x => parseInt(x).toString(16))
  .reduce((acc, cur) => acc + cur, "")
)(console.log)
*/

pipe(process.argv.slice(2))(
  x => x.map(Number),
  x => Buffer.from(x),
  x => x.toString('hex'),
  console.log
)

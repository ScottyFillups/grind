function attachTitle (a) {
  return `DR. ${a}`
}

Promise.resolve('MANHATTAN')
  .then(attachTitle)
  .then(console.log)

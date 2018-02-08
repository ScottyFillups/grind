function alwaysThrows () {
  throw new Error('OH NOES')
}

function iterate (num) {
  console.log(num)
  return num + 1
}

/* This was my original solution; yes, I'm dumb.
 * Promise.resolve(iterate).then((fn) => {
 *   for (let i = 1; i <= 10; i++) {
 *     if (i > 5) alwaysThrows()
 *     fn(i)
 *   }
 * }).catch( err => console.log(err.message))
 */

function rejectErr (err) {
  console.log(err.message)
}

Promise.resolve(iterate(1))
  .then(iterate)
  .then(iterate)
  .then(iterate)
  .then(iterate)
  .then(alwaysThrows)
  .then(iterate)
  .then(iterate)
  .then(iterate)
  .then(iterate)
  .then(iterate)
  .catch(rejectErr)


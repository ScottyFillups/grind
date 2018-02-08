function all (...promises) {
  return new Promise((resolve, reject) => {
    let counter = 0
    let res = []

    promises.forEach((elem) => {
      elem.then((data) => {
        res.push(data)
        counter++

        if (promises.length === counter) {
          resolve(res)
        }
      })
    })
  })
}

all(getPromise1(), getPromise2()).then(console.log)

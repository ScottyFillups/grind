const app1 = new Vue({
  el: '#app-1',
  data: {
    message: 'Hello Vue! test'
  }
})

const app2 = new Vue({
  el: '#app-2',
  data: {
    message: `Page loaded on ${ new Date().toLocaleString() }`
  }
})


// setTimeout(() => {
//   app1.message = 'Message changed!'
// }, 2000)

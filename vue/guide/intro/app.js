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

const app3 = new Vue({
  el: '#app-3',
  data: {
    todos: [
      { text: 'Make cool stuff' },
      { text: 'Get GitHub stars' },
      { text: '???' },
      { text: 'Profit!!!' }
    ]
  }
})

const app4 = new Vue({
  el: '#app-4',
  data: {
    message: 'hello, world'
  }
})

Vue.component('todo-list', {
  props: ['todo'],
  template: '<li>{{ todo.text }}</li>'
})

const app5 = new Vue({
  el: '#app-5',
  data: {
    todos: [
      { id: 0, text: 'Loochan' },
      { id: 1, text: 'Tutturu' },
      { id: 2, text: '???' },
      { id: 3, text: 'Profit!!!' }
    ]
  }
})



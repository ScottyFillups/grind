const vm = new Vue({
  el: '#app',
  data: {
    message: 'hello'
  },
  computed: {
    reversedMessage: function () {
      return this.message.split('').reverse().join('')
    }
  },
  methods: {
    reversedMessageFn: function () {
      return this.message.split('').reverse().join('')
    }
  }
})

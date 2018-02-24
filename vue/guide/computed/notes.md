# Computed Properties and Watchers

* The less logic in templates, the better
* Manipulation of data should ideally be done via a computed property

```html
<div id="app">
  <p>Original message: {{ message }}</p>
  <p>Reversed message: {{ messageReversed }}</p>
</div>
```

```js
const vm = new Vue({
  el: '#app',
  data: {
    message: 'hello'
  },
  computed: {
    reversedMessage: function () {
      return this.message.split('').reverse().join('')
    }
  }
})
```

* Computed properties can be used for data bindings as well
* In this example, note that `reversedMessage` depends on `message`


### Computed vs Methods

* The above example could've also been done with a method property:

```js
const vm = new Vue({
  el: '#app',
  data: {
    message: 'hello'
  },
  methods: {
    reversedMessage: function () {
      return this.message.split('').reverse().join('')
    }
  }
})
```

```html
<div id="app">
  <p>{{ reversedMessage() }}</p>
</div>
```

* The difference? Computed properties are cached, and only re-render if their dependencies change
* Method properties aren't cached, and are re-evaluated every time, regardless of dependencies

```js
// In the example below, `now` is a computed property
// But, it has no dependencies...
// And computed properties only re-render when its dependencies change...
// ... Which means `now` will never re-render, and will have an incorrect date.
// #feelsbad

const app = new Vue({
  el: '#app',
  computed: {
    now: function () {
      return Date.now()
    }
  }
})
```

### Watched properties

* `watch`ed properties are functions that trigger when state changes
* You can use it to change other data, by creating _side effects_ (I shiggy diggy)

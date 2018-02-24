# vue intro

### hello, world

```js
const app = new Vue({
  el: '#app',
  data: {
    a: 5,
    message: 'hello, world'
  }
})
```

```html
<div id="app">
  <!-- Text interpolation: -->
  {{ message }}
  <!-- Vue can evaluate JavaScript expressions as well: -->
  {{ a / 2 }}
</div>
```

### Basic directives

#### v-for

```html
<ol>
  <li v-for="item in collection">
    {{ item }}
  </li>
</ol>
```

#### v-bind:X

```js
const app = new Vue({
  el: '#app',
  data: {
    isDisabled: true
  }
})
```

```html
<input type="text" v-bind:disabled="isDisabled">
```

#### v-if

```html
<span v-if="showSpan">If false, span isn't rendered</span>
```

#### v-model

```html
<p>{{ message }}</p>
<input v-model="message">
<!-- Enables bi-directional flow -->
```

#### v-once

```html
<span v-once>This isn't reactive, and will never change: {{ msg }}</span>
```

#### v-html

```js
// Note that dynamically rendering HTML can result in XSS vulnerabilities
const app = new Vue({
  el: '#app',
  data: {
    rawHtml: '<span class="red">hello</span>'
  }
})
```

```html
<p>HTML interpolation demo: <span v-html="rawHtml"></span></p>
```

### Vue components

* Use `v-bind:prop="myobj"` to pass data to a Vue component
* `v-bind:key` is necessary for some reason; it'll be explained later

```js
Vue.component('tag-name', {
  props: ['bind-name'],
  template: '<li>Any occurance of &lt;tag-name&gt; is expanded to this</li>'
})

const app = new Vue({
  el: '#app',
  data: {
    list: [
      { id: 0, text: 'ayy' },
      { id: 1, text: 'lmao' }
    ]
  }
})
```

```html
<div id="app">
  <tag-name
    v-for="item in list"
    v-bind:bind-name="item"
    v-bind:key="item.id">
  </tag-name>
</div>
```

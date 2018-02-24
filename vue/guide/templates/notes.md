# Vue templates

### Interpolation

#### Text

```html
<span>Message: {{ msg }}</span>
```

#### JavaScript expressions

```js
const vm = new Vue({
  el: '#app',
  data: {
    a: 5
  }
})
```

```html
<p>a + 5 = {{ a + 5 }}</p>
```

### Directives

* Directives are special attributes that begin with `v-`

```html
<p v-if="seen">Displayed if "seen" is true</p>
```

#### Arguments

```html
<p v-directive:argument="value">This is pseudocode! See below for something more concrete</p>
<a v-bind:href="myurl">link to my site</a>
```

#### Modifiers

* Modifiers, get this, _modify_ the behaviour of a directive
* Denoted by a dot

```html
<form v-on:submit.prevent="onSubmit"> ... </form>
```

### Shorthands

* @ for `v-on` (events)
* : for `v-bind` (attributes)

```html
<!-- full syntax -->
<a v-bind:href="url"> ... </a>

<!-- shorthand -->
<a :href="url"> ... </a>
```

```html
<!-- full syntax -->
<a v-on:click="doSomething"> ... </a>

<!-- shorthand -->
<a @click="doSomething"> ... </a>
```

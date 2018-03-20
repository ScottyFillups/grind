Ember acceptance tests are UI unit tests, and use QUnit:
Out of the four test frameworks (oldest to newest):
* QUnit: Framework ideal for testing front-end interaction, like page clicks
* Jasmine: BDD and monolithic, supports Node
* Mocha: BDD and modular (eg doesn't come with assert library)
* Jest: BDD and monolithic, originally built for React, optimal for snapshots

# Route hooks

* When rendering a page, you can specify hooks in the route that trigger during the route lifecycle, for example:

```js
import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return [{ msg: 'some data' }];
  }
});
```

# CLI reference

* ember new [name]
* ember g acceptance-test [name]
* ember g route [name]
* ember install [addon]
* ember g component [name]
* ember g helper [name]

# Components

* All components need to have a dash in its name to differentiate it from HTML elements
* Comprised of two parts
  * Handlebars template
  * JavaScript source file describing behaviour
* JavaScript source is in /components, Handlebars template is in /templates/components

# Data management

* Ember comes with a data management library called "Ember Data": https://github.com/emberjs/data
* You can mock an HTTP server using `ember-cli-mirage`

# Models

* The concept of models and schemas seem to be intertwined in Ember
* You make a schema, "stubbing" attributes:

```js
import DS from 'ember-data';
import { computed } from '@ember/object';

export default DS.Model.extend({
  id: DS.attr('string'),   // example of a transform: casts data from API to string
  firstName: DS.attr(),
  lastName: DS.attr(),

  fullName: computed('firstName', 'lastName', function() {
    return `${this.get('firstName')} ${this.get('lastName')}`;
  })
});
```

# Add-ons

* https://emberobserver.com/
* "Add-ons" are essentially ember-tailored packages found on npm


# Miscellaneous

* `{{outlet}}` is the entrypoint for a child component (eg. `/posts/new` will render in `/posts`'s `{{outlet}}`)

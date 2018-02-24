# Building a React SPA

* Part of the app needs to be static
  * This part is called the "app frame"
* By default, routes match if it's a subset:
  * `/` still match to `/stuff`
  * `/stuff` will match to `/stuff/contacts`
  * Use the `exact` keyword to only match if the two paths are identical

function foo() {
  var bar;
  quux = 7;
  function zip() {
    bar = true;
    var quux = 6;
  }
  return zip;
}

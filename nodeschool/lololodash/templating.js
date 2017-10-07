var _ = require('lodash')

module.exports = function (c) {
  var reducedCollection = {
    name: c.name,
    login: _.reduce(c.login, (acc) => acc + 1, 0)
  }
  var templateStr = 'Hello <%=name%> (logins: <%=login%>)'
  
  return _.template(templateStr)(reducedCollection)
}

// Redundancies:
// - No need to use reduce; just get the length of array
// - You can embed any arbitrary expression in templates

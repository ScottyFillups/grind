var _ = require('lodash')

module.exports = function (collection) {
  var templateStr = 'Hello <%=name%> (logins: <%=_.size(login)%>)'
  return _.template(templateStr)(collection)
}

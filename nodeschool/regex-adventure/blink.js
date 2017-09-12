var marked = require('marked')

module.exports = (str) => marked(str).replace(/@@(.+?)@@/g, '<blink>$1</blink>')

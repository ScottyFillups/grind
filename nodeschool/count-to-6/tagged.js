console.log(html`<b>${process.argv[2]} says</b>: "${process.argv[3]}"`)

function escape (str) {
  return str.replace(/&/g, '&amp;')
            .replace(/"/g, '&quot;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/'/g, '&apos;')
}

function html (template, user, comment) {
  return template[0] + escape(user) + template[1] + escape(comment) + template[2]
}

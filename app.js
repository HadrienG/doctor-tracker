let url
if (process.env.NODE_ENV === 'DEV') {
    url = 'http://localhost:8080/'
} else {
    url = `file://${process.cwd()}/dist/index.html`
}

var menubar = require('menubar')

var mb = menubar({
    index: url}
)

mb.on('ready', function ready () {

    // your app code here
})

let url
if (process.env.NODE_ENV === 'DEV') {
    url = 'http://localhost:8080/'
} else {
    url = `file://${process.cwd()}/dist/index.html`
}

var menubar = require('menubar')

var mb = menubar({
    index: url,
    width: 200,
    height: 120,
    icon: `${process.cwd()}/src/assets/transparent.png`,
    transparent: false

})

mb.on('ready', function ready () {
    mb.tray.setTitle('DT');
    // your app code here
})

const electron = require('electron');
const url = require('url');
const paths = require('paths');
const { app, BrowserWindow } = electron;

let mainWindow;

// Listen for the app to be ready
app.on('ready', function () {
    // Create a new window
    mainWindow = new BrowserWindow({});
    // Load HTML file in the window
    // file://_dirname/mainWindow.html
    mainWindow.loadUrl(url.format({
        pathname: path.join(__dirname, 'mainWindow.html'),
        protocol: 'file:',
        slashes: true
    }));
})

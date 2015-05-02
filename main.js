var app = require('app');
var BrowserWindow = require('browser-window');
var Menu = require('menu');

require('crash-reporter').start();

var mainWindow = null;
var menu = null;

app.on('window-all-closed', function () {
  //if (process.platform !== 'darwin') {
    app.quit();
  //}
});

app.on('ready', function () {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600
  });

  mainWindow.loadUrl('file://' + __dirname + '/index.html');
  mainWindow.focus();

  mainWindow.on('closed', function () {
    mainWindow = null;
  });

  var template = [
    {
      label: '&File',
      submenu: [
        {
          label: '&Close',
          accelerator: 'CmdOrCtrl+W',
          click: function() { mainWindow.close(); }
        }
      ]
    },
    {
      label: 'Page',
      submenu: [
        {
          label: 'Home',
          click: function () {
            mainWindow.webContents.send('transitionTo', 'home');
          }
        },
        {
          label: 'About',
          click: function () {
            mainWindow.webContents.send('transitionTo', 'about');
          }
        },
        {
          label: 'Contact',
          click: function () {
            mainWindow.webContents.send('transitionTo', 'contact');
          }
        }
      ]
    },
    {
      label: '&View',
      submenu: [
        {
          label: '&Reload',
          accelerator: 'CmdOrCtrl+R',
          click: function() { mainWindow.restart(); }
        },
        {
          label: 'Toggle &Fullscreen',
          accelerator: 'CmdOrCtrl+F',
          click: function() {
            mainWindow.setFullScreen(!mainWindow.isFullScreen());
          }
        },
        {
          label: '&Toggle DevTools',
          accelerator: 'Alt+CmdOrCtrl+I',
          click: function() { mainWindow.toggleDevTools(); }
        },
      ]
    }
  ];
  menu = Menu.buildFromTemplate(template);
  mainWindow.setMenu(menu);
});

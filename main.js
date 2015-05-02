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

  // Dock Menu (OSX)
  if (process.platform === 'darwin') {
    var dockMenu = Menu.buildFromTemplate([
      { label: 'New Window', click: function() { console.log('New Window'); } },
      { label: 'New Window with Settings', submenu: [
        { label: 'Basic' },
        { label: 'Pro'},
      ]},
      { label: 'New Command...'},
    ]);
    app.dock.setMenu(dockMenu);
  }

  // Application Menu
  if (process.platform === 'darwin') {
    var osxTemplate = [
      {
        label: 'Electron',
        submenu: [
          {
            label: 'About Electron',
            selector: 'orderFrontStandardAboutPanel:'
          },
          {
            type: 'separator'
          },
          {
            label: 'Services',
            submenu: []
          },
          {
            type: 'separator'
          },
          {
            label: 'Hide Electron',
            accelerator: 'Command+H',
            selector: 'hide:'
          },
          {
            label: 'Hide Others',
            accelerator: 'Command+Shift+H',
            selector: 'hideOtherApplications:'
          },
          {
            label: 'Show All',
            selector: 'unhideAllApplications:'
          },
          {
            type: 'separator'
          },
          {
            label: 'Quit',
            accelerator: 'Command+Q',
            click: function() { app.quit(); }
          },
        ]
      },
      {
        label: 'Edit',
        submenu: [
          {
            label: 'Undo',
            accelerator: 'Command+Z',
            selector: 'undo:'
          },
          {
            label: 'Redo',
            accelerator: 'Shift+Command+Z',
            selector: 'redo:'
          },
          {
            type: 'separator'
          },
          {
            label: 'Cut',
            accelerator: 'Command+X',
            selector: 'cut:'
          },
          {
            label: 'Copy',
            accelerator: 'Command+C',
            selector: 'copy:'
          },
          {
            label: 'Paste',
            accelerator: 'Command+V',
            selector: 'paste:'
          },
          {
            label: 'Select All',
            accelerator: 'Command+A',
            selector: 'selectAll:'
          },
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
        label: 'View',
        submenu: [
          {
            label: 'Reload',
            accelerator: 'Command+R',
            click: function() { mainWindow.restart(); }
          },
          {
            label: 'Toggle Fullscreen',
            click: function() {
              mainWindow.setFullScreen(!mainWindow.isFullScreen());
            }
          },
          {
            label: 'Toggle DevTools',
            accelerator: 'Alt+Command+I',
            click: function() { mainWindow.toggleDevTools(); }
          },
        ]
      },
      {
        label: 'Window',
        submenu: [
          {
            label: 'Minimize',
            accelerator: 'Command+M',
            selector: 'performMiniaturize:'
          },
          {
            label: 'Close',
            accelerator: 'Command+W',
            selector: 'performClose:'
          },
          {
            type: 'separator'
          },
          {
            label: 'Bring All to Front',
            selector: 'arrangeInFront:'
          },
        ]
      },
    ];

    menu = Menu.buildFromTemplate(osxTemplate);
    Menu.setApplicationMenu(menu);
  } else {
    var template = [
      {
        label: '&File',
        submenu: [
          {
            label: '&Open',
            accelerator: 'Ctrl+O',
          },
          {
            label: '&Close',
            accelerator: 'Ctrl+W',
            click: function() { mainWindow.close(); }
          },
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
            accelerator: 'Ctrl+R',
            click: function() { mainWindow.restart(); }
          },
          {
            label: 'Toggle &Fullscreen',
            click: function() {
              mainWindow.setFullScreen(!mainWindow.isFullScreen());
            }
          },
          {
            label: '&Toggle DevTools',
            accelerator: 'Alt+Ctrl+I',
            click: function() { mainWindow.toggleDevTools(); }
          },
        ]
      },
    ];

    menu = Menu.buildFromTemplate(template);
    mainWindow.setMenu(menu);
  }
});

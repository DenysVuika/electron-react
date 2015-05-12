var app = require('app'),
    BrowserWindow = require('browser-window'),
    runtime = require('../runtime');

function getMainWindow() {
  var id = runtime.windowId;

  if (id) {
    var instance = BrowserWindow.fromId(id);
    return instance;
  }

  return null;
}

var _File = {
  label: '&File',
  submenu: [
    {
      label: '&Open',
      accelerator: 'Ctrl+O',
    },
    {
      label: '&Close',
      accelerator: 'Ctrl+W',
      click: function() {
        var mainWindow = getMainWindow();
        if (mainWindow) {
          mainWindow.close();
        }
      }
    },
  ]
};

var _Page = {
  label: 'Page',
  submenu: [
    {
      label: 'Home',
      click: function () {
        var mainWindow = getMainWindow();
        if (mainWindow) {
          mainWindow.webContents.send('transitionTo', 'home');
        }
      }
    },
    {
      label: 'About',
      click: function () {
        var mainWindow = getMainWindow();
        if (mainWindow) {
          mainWindow.webContents.send('transitionTo', 'about');
        }
      }
    },
    {
      label: 'Contact',
      click: function () {
        var mainWindow = getMainWindow();
        if (mainWindow) {
          mainWindow.webContents.send('transitionTo', 'contact');
        }
      }
    }
  ]
};

var _View = {
  label: '&View',
  submenu: [
    {
      label: 'Toggle &Fullscreen',
      click: function() {
        var mainWindow = getMainWindow();
        if (mainWindow) {
          mainWindow.setFullScreen(!mainWindow.isFullScreen());
        }
      }
    }
  ]
};

var menu = {
  File: _File,
  Page: _Page,
  View: _View,
  template: [
    _File,
    _Page,
    _View,
  ]
};

module.exports = menu;

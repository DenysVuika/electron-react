var app = require('app'),
    BrowserWindow = require('browser-window'),
    runtime = require('../runtime');

function getMainWindow () {
  var id = runtime.windowId;

  if (id) {
    var instance = BrowserWindow.fromId(id);
    return instance;
  }

  return null;
}

var _App = {
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
      click: function () {
        app.quit();
      }
    },
  ]
};

var _Edit = {
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
  label: 'View',
  submenu: [
    {
      label: 'Toggle Fullscreen',
      click: function () {
        var mainWindow = getMainWindow();
        if (mainWindow) {
          mainWindow.setFullScreen(!mainWindow.isFullScreen());
        }
      }
    }
  ]
};

var _Window = {
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
};

var menu = {
  App: _App,
  Edit: _Edit,
  Page: _Page,
  View: _View,
  Window: _Window,
  template: [
    _App,
    _Edit,
    _Page,
    _View,
    _Window
  ]
};

module.exports = menu;

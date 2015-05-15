var events = require('events'),
    BrowserWindow = require('browser-window');

function RuntimeContext () {
  events.EventEmitter.call(this);

  this.events = {
    INIT_APP_MENU: 'INIT_APP_MENU',
    INIT_ROUTES: 'INIT_ROUTES'
  };

  this.routes = [];

  // Main window id
  this.windowId = null;
}

// Extend runtime context class so that we can use on() and emit()
RuntimeContext.prototype = Object.create(events.EventEmitter.prototype);

RuntimeContext.prototype.getMainWindow = function () {
  if (this.windowId) {
    return BrowserWindow.fromId(this.windowId);
  }
  return null;
};

module.exports = new RuntimeContext();

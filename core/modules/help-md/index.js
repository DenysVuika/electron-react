var path = require('path');

function setupAppMenu (runtime, appMenu) {
  var mainWindow = runtime.getMainWindow();

  appMenu.Page.submenu.push({
    label: 'Help',
    click: function () {
      if (mainWindow) {
        mainWindow.webContents.send('transitionTo', 'help');
      }
    }
  });
}

function setupRoutes (runtime) {
  runtime.routes.push({
    route: 'help',
    text: 'Help',
    navbar: true,
    handler: path.join(__dirname, '/dist/components/help')
  });
}

var init = function (runtime) {
  if (runtime) {
    runtime.once(runtime.events.INIT_APP_MENU, function (appMenu) {
      setupAppMenu(runtime, appMenu);
    });

    runtime.once(runtime.events.INIT_ROUTES, function () {
      setupRoutes(runtime);
    });
  }
};

module.exports = init;

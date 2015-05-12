function setupAppMenu (runtime, appMenu) {

  var mainWindow = runtime.getMainWindow();

  appMenu.View.submenu.push({
    label: '&Reload',
    accelerator: 'CmdOrCtrl+R',
    click: function () {
      mainWindow.restart();
    }
  });

  appMenu.View.submenu.push({
    label: '&Toggle Developer Tools',
    accelerator: 'Alt+CmdOrCtrl+I',
    click: function () {
      mainWindow.toggleDevTools();
    }
  });
}

var init = function (runtime) {
  if (runtime) {
    runtime.once(runtime.events.INIT_APP_MENU, function (appMenu) {
      setupAppMenu(runtime, appMenu);
    });
  }
};

module.exports = init;

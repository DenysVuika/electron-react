var menu = null;

if (process.platform === 'darwin') {
  menu = require('./menu-mac');
} else {
  menu = require('./menu-win');
}

module.exports = menu;

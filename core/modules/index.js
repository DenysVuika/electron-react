var fs = require('fs'),
    path = require('path');

var loader = {
  load: function (context) {
    //debug('Starting external modules...');
    fs.readdirSync(__dirname).forEach(function(file) {
      var p = path.join(__dirname, file);
      var stats = fs.statSync(p);
      if (stats.isDirectory()) {
        //debug('Loading module ' + file);
        require(p)(context);
      }
    });
  }
};

module.exports = loader;

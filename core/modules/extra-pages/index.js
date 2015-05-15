var path = require('path');

var init = function (runtime) {
  if (runtime) {
    // setup routes
    runtime.once(runtime.events.INIT_ROUTES, function () {
      runtime.routes.push({
        route: 'test1',
        text: 'Test 1',
        navbar: true,
        handler: path.join(__dirname, '/dist/components/page1')
      });
      runtime.routes.push({
        route: 'test2',
        text: 'Test 2',
        navbar: true,
        handler: path.join(__dirname, '/dist/components/page2')
      });
    });
  }
};

module.exports = init;

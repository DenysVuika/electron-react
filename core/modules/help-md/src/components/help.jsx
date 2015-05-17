var React = require('react'),
    fs = require('fs'),
    path = require('path');

var md = require('markdown-it')({
  replaceLink: function (link, env) {
    return '#/help?page=' + link;
  }
}).use(require('markdown-it-replace-link'));

var Help = React.createClass({
  getPageContent: function (page) {
    var root = path.join(__dirname, '../../content');
    var content = fs.readFileSync(path.join(root, page), 'utf8');
    return {
      __html: md.render(content)
    };
  },
  render: function() {
    var page = (this.props.query.page || 'index') + '.md';
    return (
      <div>
        <div dangerouslySetInnerHTML={this.getPageContent(page)}></div>
      </div>
    );
  }

});

module.exports = Help;

/** @jsx React.DOM */

var React = require('react');
var Header = require('./header');

var Page2 = React.createClass({

  render: function() {
    return (
      <div>
        <Header />
        <div>Page 2 Content</div>
        <small>This page was loaded from external module.</small>
      </div>
    );
  }

});

module.exports = Page2;

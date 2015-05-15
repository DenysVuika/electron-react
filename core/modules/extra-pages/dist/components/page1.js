/** @jsx React.DOM */

var React = require('react');
var Header = require('./header');

var Page1 = React.createClass({displayName: "Page1",

  render: function() {
    return (
      React.createElement("div", null, 
        React.createElement(Header, null), 
        React.createElement("div", null, "Page 1 Content"), 
        React.createElement("small", null, "This page was loaded from external module.")
      )
    );
  }

});

module.exports = Page1;

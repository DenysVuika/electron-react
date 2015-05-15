/** @jsx React.DOM */
var React = require('react');

var MyHeader = React.createClass({displayName: "MyHeader",

  render: function() {
    return (
      React.createElement("h2", null, "Header")
    );
  }

});

module.exports = MyHeader;

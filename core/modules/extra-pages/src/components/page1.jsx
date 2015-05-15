/** @jsx React.DOM */

var React = require('react');
var Header = require('./header');

var Page1 = React.createClass({

  render: function() {
    return (
      <div>
        <Header />
        <div>Page 1 Content</div>
        <small>This page was loaded from external module.</small>
      </div>
    );
  }

});

module.exports = Page1;

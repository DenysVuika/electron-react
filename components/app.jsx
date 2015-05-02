import React from 'react';
import Router from 'react-router';
import { RouteHandler, Route, Navigation } from 'react-router';
import { Nav, Navbar } from 'react-bootstrap';
import { NavItemLink } from 'react-router-bootstrap';
import { HomePage, AboutPage, ContactPage } from './pages';

const App = React.createClass({
  mixins: [ Navigation ],

  componentDidMount() {
    var ipc = window.require('ipc');
    ipc.on('transitionTo', function(routeName) {
      //this.transitionTo(routeName, { the: 'params' }, { the: 'query' });
      this.transitionTo(routeName);
    }.bind(this));
  },

  render() {
    return (
      <div>
        <Navbar fixedTop fluid brand="Project name">
          <Nav>
            <NavItemLink to="home">Home</NavItemLink>
            <NavItemLink to="about">About</NavItemLink>
            <NavItemLink to="contact">Contact</NavItemLink>
          </Nav>
        </Navbar>

        <RouteHandler />
      </div>
    );
  }
});

var routes = (
  <Route name="app" path="/" handler={App}>
    <Route name="home" path="/" handler={HomePage} />
    <Route name="about" handler={AboutPage} />
    <Route name="contact" handler={ContactPage} />
  </Route>
);

Router.run(routes, function (Handler) {
  React.render(<Handler />, document.body);
});

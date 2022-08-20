import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Webapp from './Webapp';

export default function App() {
  return (
    <Router>
      <Link to="/" />
      <Link to="/home" />
      <Link to="/about" />
      <Link to="/contact" />
      <Link to="/webapp" />

      {/* A <Switch> looks through its children <Route>s and
      renders the first one that matches the current URL. */}
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/webapp">
          <Webapp />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

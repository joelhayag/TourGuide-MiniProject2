import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';
import About from './About';
import Blogs from './Blogs';
import Contact from './Contact';
import Home from './Home';

export default function App() {
  return (
    <Router>
      <Link to="/" />
      <Link to="/about" />
      <Link to="/home" />
      <Link to="/contact" />
      <Link to="/blogs" />

      {/* A <Switch> looks through its children <Route>s and
      renders the first one that matches the current URL. */}
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/blogs">
          <Blogs />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

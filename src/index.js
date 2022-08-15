import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import About from './AboutPage';
import Contact from './Contact';
import Blogs from './Blogs';

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route index element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blogs" element={<Blogs />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));

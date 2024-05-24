// remote-app/src/RemoteApp.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

const Page1 = () => <h2>Remote Page 1</h2>;
const Page2 = () => <h2>Remote Page 2</h2>;

const RemoteApp = () => {
  return <h1>RemoteApp</h1>;
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/page1">Page 1</Link>
          </li>
          <li>
            <Link to="/page2">Page 2</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/page1" element={<Page1 />} />
        <Route path="/page2" element={<Page2 />} />
      </Routes>
    </Router>
  );
};

export default RemoteApp;

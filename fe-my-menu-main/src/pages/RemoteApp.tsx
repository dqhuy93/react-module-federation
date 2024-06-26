// remote-app/src/RemoteApp.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

const Page1 = () => <h2>Remote Page 1</h2>;
const Page2 = () => <h2>Remote Page 2</h2>;

const RemoteApp = () => {
  return (
    <div
      style={{
        padding: 15,
        background: '#CCC',
        marginBottom: 15,
      }}
    >
      <h1>Main remote</h1>
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
    </div>
  );
};

export default RemoteApp;

import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

const Page1 = () => <h2>Remote Page 1</h2>;
const Page2 = () => <h2>Remote Page 2</h2>;

const RemoteApp = () => {
  return (
    <>
      {/* <Router> */}
      <nav>
        <ul>
          <li>
            <Link to="/about">Page about</Link>
          </li>
          <li>
            <Link to="/contact">Page contact</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/about" element={<Page1 />} />
        <Route path="/contact" element={<Page2 />} />
      </Routes>
      {/* </Router> */}
    </>
  );
};

export default RemoteApp;

import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  HashRouter,
  Outlet,
  Router,
} from 'react-router-dom';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
// eslint-disable-next-line
const RemoteApp = React.lazy(() => import('@main/Main'));
// eslint-disable-next-line
const Booking = React.lazy(() => import('@booking/Booking'));

function Main1() {
  return (
    <div>
      <h2>Main Page 1</h2>
      <Routes>
        <Route
          path="main"
          element={
            <>
              <Outlet />
            </>
          }
        >
          <Route path="chemgio" element={<Chemgio />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

function Chemgio() {
  return (
    <div>
      <h2>Chemgio</h2>
    </div>
  );
}

const Main: React.FC = () => {
  return (
    <BrowserRouter>
      <React.Suspense>
        <Booking />
      </React.Suspense>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/main">Main</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        {/* <Route
          path="main"
          element={
            <>
              <Outlet />
            </>
          }
        >
          <Route path="chemgio" element={<Chemgio />}></Route>
        </Route> */}

        <Route path="main" element={<Main1 />} />
        {/* <Route path="remote" element={<RemoteApp />} /> */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Main;

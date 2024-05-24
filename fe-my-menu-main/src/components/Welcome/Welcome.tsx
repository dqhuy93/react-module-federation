import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  MemoryRouter,
  Outlet,
} from 'react-router-dom';

function Main1() {
  return <h2>Main Page 1</h2>;
}
function Main2() {
  return <h2>Main Page 2</h2>;
}

const Welcome: React.FC = () => {
  return (
    <div>
      <h1>Welcome to my main 2</h1>
      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main1 />} />
          <Route path="/about" element={<Main2 />} />
        </Routes>
      </BrowserRouter> */}

      {/* <MemoryRouter basename="/main"> */}
      {/* <Routes>
          <Route path="/" element={<Main1 />} />
        </Routes> */}
      {/* </MemoryRouter> */}

      {/* <Routes>
        <Route
          path="/"
          element={
            <>
              <h2>123123123</h2>
              <Outlet />
            </>
          }
        >
          <Route path="chemgio" element={<Main2 />}></Route>
        </Route>
      </Routes> */}
    </div>
  );
};

export default Welcome;

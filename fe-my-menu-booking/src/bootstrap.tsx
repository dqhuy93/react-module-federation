import React from 'react';
import { createRoot } from 'react-dom/client';
import Booking from './pages';

const App: React.FC = () => {
  return <Booking />;
};

const container = document.getElementById("root-booking") as HTMLElement;
const root = createRoot(container);
root.render(<App />);

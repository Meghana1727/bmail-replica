import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // If you have global styles in index.css
import App from './App'; // Main app component

const rootElement = document.getElementById('root') as HTMLElement;
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <App />  {/* Rendering the App component */}
  </React.StrictMode>
);

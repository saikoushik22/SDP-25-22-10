import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';  // Your main styles
import App from './App';  // Your App component
import "./styles/global.css";  // Optional global styles (remove if not used)

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Optional: if you want to measure performance in your app
// reportWebVitals(console.log);

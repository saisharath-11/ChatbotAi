// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client'; // Use React 18's root API
import './index.css';
import App from './App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
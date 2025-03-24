import React from 'react';
import { createRoot } from 'react-dom/client'; // For React 18
import './index.css'; // Global styles
import App from './App'; // Import the main App component

// Rendering the App component inside the root div in the HTML
createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

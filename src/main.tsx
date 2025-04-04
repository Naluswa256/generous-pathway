
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Use createRoot from React 18
const container = document.getElementById("root");
const root = createRoot(container!);

// Enable React Strict Mode for better development experience
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

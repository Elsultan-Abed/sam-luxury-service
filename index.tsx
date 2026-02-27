
import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import App from './App';
import './index.css';

const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Root element not found');

const root = createRoot(rootElement);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        {/* Root redirect to default language (Flemish Dutch) */}
        <Route path="/" element={<Navigate to="/nl/" replace />} />
        {/* Language-specific routes */}
        <Route path="/:lang/*" element={<App />} />
        {/* Fallback */}
        <Route path="*" element={<Navigate to="/nl/" replace />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

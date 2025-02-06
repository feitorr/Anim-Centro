import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';  // Se você usar um arquivo de estilos
import App from './App';  // O arquivo principal do React

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

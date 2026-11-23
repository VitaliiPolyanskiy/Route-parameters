import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';

// BrowserRouter виконує зіставлення запиту з маршрутами.
// Якщо якийсь маршрут збігається з URL запиту,
// то цей маршрут обирається для обробки запиту.

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
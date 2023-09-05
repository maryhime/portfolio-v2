

import React from 'react'
import ReactDOM from 'react-dom/client'
import { PAGES } from './routes';
import index from './index.css';
import { BrowserRouter } from 'react-router-dom';
import HomePage from './pages/HomePage';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <HomePage />
    </BrowserRouter>
  </React.StrictMode>
)



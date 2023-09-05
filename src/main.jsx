

import React from 'react'
import ReactDOM from 'react-dom/client'
import index from './index.css';
import { BrowserRouter } from 'react-router-dom';
import HomePage from './pages/Home/HomePage';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <HomePage />
    </BrowserRouter>
  </React.StrictMode>
)



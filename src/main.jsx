

import React from 'react'
import ReactDOM from 'react-dom/client'
import { PAGES } from './routes';
import index from './index.css';
import { BrowserRouter } from 'react-router-dom';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      {PAGES.map((item) => item.component)}
    </BrowserRouter>
  </React.StrictMode>
)





import React from 'react'
import ReactDOM from 'react-dom/client'
import { PAGES } from './routes';
import index from './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {PAGES.map((item) => item.component)}
  </React.StrictMode>
)



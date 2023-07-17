

import React from 'react'
import ReactDOM from 'react-dom/client'
import { PAGES } from './routes';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {PAGES.map((item) => item.component)}
  </React.StrictMode>,
)



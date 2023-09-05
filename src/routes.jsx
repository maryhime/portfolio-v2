
import React from 'react';

import HomePage from './pages/HomePage.jsx'
import WebDesignPage from './pages/WebDesignPage.jsx';
import CaseStudiesPage from './pages/CaseStudiesPage.jsx';
import IllustrationPage from './pages/IllustrationPage.jsx';
import ToolsPage from './pages/ToolsPage.jsx';

export const PAGES = [
  {
    'id': 1,
    'name': 'Web Design',
    'component': <WebDesignPage />,
    'path': '/',
  },
  {
    'id': 2,
    'name': 'Studies',
    'component': <CaseStudiesPage />,
    'path': '/case-study',
  },
  {
    'id': 3,
    'name': 'Illustrations',
    'component': <IllustrationPage />,
    'path': '/illustrations',
  },
  {
    'id': 4,
    'name': 'Tools',
    'component': <ToolsPage />,
    'path': '/tools',
  },
  {
    'id': 5,
    'name': 'Resume',
    'component': <ToolsPage />,
    'path': '/resume',
  },
];
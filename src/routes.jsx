
import React, { lazy } from 'react';

import CaseStudiesPage from './pages/CaseStudies/CaseStudiesPage.jsx';
import IllustrationPage from './pages/Illustration/IllustrationPage.jsx';
import ToolsPage from './pages/Tools/ToolsPage.jsx';
import WebDesignPage from './pages/WebDesign/WebDesignPage';
import { PageNotFound } from './components/PageNotFound.jsx';
import ResumePage from './pages/Resume/ResumePage.jsx';

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
    'component': <PageNotFound/>,
    'path': '/case-study',
  },
  {
    'id': 3,
    'name': 'Illustrations',
    'component': <IllustrationPage s/>,
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
    'component': <ResumePage />,
    'path': '/resume',
  },
];
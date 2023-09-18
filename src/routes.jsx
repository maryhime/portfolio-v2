import React from "react";

import IllustrationPage from "./pages/Illustration/IllustrationPage.jsx";
import ToolsPage from "./pages/Tools/ToolsPage.jsx";
import WebDesignPage from "./pages/WebDesign/WebDesignPage";
import { PageNotFound } from "./components/PageNotFound.jsx";

export const PAGES = [
  {
    id: 1,
    name: "Web Design",
    component: <WebDesignPage />,
    path: "/",
  },
  {
    id: 2,
    name: "Studies",
    component: <PageNotFound />,
    path: "/case-study",
  },
  {
    id: 3,
    name: "Illustrations",
    component: <IllustrationPage />,
    path: "/illustrations",
  },
  {
    id: 4,
    name: "Tools",
    component: <ToolsPage />,
    path: "/tools",
  },
];

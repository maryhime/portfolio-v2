import ToolsPage from "./pages/Tools/ToolsPage.jsx";
import { createBrowserRouter } from "react-router-dom";
import { MainLayout } from "./layout/MainLayout.js";
import { WebDesignInnerPage } from "./pages/WebDesign/WebDesignInnerPage/index.jsx";
import { WebDesignMainLayout } from "./layout/WebDesignMainLayout.js";
import { CaseStudiesInnerPage } from "./pages/CaseStudies/CaseStudiesInnerPage/index.js";
import { CaseStudiesMainLayout } from "./layout/CaseStudiesMainLayout.js";

import { PageNotFound } from "./components/PageNotFound.jsx";
import GraphicDesignPage from "./pages/GraphicDesign/index.jsx";


export const router = createBrowserRouter([
  {
    path: "*",
    Component: PageNotFound,
  },
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        path: "/",
        Component: CaseStudiesMainLayout,
        children: [
          {
            path: ":id",
            Component: CaseStudiesInnerPage,
          },
        ],
      },
      {
        Component: WebDesignMainLayout,
        path: "design-gallery",
        children: [
          {
            path: ":id",
            Component: WebDesignInnerPage,
          },
        ],
      },
      {
        Component: GraphicDesignPage,
        path: "/graphic-design",
      },
      {
        Component: ToolsPage,
        path: "/tools",
      },
    ],
  },
]);

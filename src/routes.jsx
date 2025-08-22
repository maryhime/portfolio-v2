import IllustrationPage from "./pages/Illustration/IllustrationPage.jsx";
import ToolsPage from "./pages/Tools/ToolsPage.jsx";
import GraphicDesignPage from "./pages/GraphicDesign/GraphicDesignPage.jsx";
import { createBrowserRouter } from "react-router-dom";
import { MainLayout } from "./pages/layout/MainLayout.js";
import { WebDesignInnerPage } from "./pages/WebDesign/WebDesignInnerPage/index.jsx";
import { WebDesignMainLayout } from "./pages/layout/WebDesignMainLayout.js";
import { CaseStudiesInnerPage } from "./pages/CaseStudies/CaseStudiesInnerPage/index.js";
import { CaseStudiesMainLayout } from "./pages/layout/CaseStudiesMainLayout.js";

import { PageNotFound } from "./components/PageNotFound.jsx";

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
        Component: IllustrationPage,
        path: "/illustrations",
      },
      {
        Component: ToolsPage,
        path: "/tools",
      },
    ],
  },
]);

import IllustrationPage from "./pages/Illustration/IllustrationPage.jsx";
import ToolsPage from "./pages/Tools/ToolsPage.jsx";
import WebDesignPage from "./pages/WebDesign/WebDesignPage.jsx";
import CaseStudiesPage from "./pages/CaseStudies/CaseStudiesPage.jsx";
import GraphicDesignPage from "./pages/GraphicDesign/GraphicDesignPage.jsx";
import { createBrowserRouter } from "react-router-dom";
import { MainLayout } from "./pages/layout/MainLayout.js";
import { WebDesignInnerPage } from "./pages/WebDesign/WebDesignInnerPage/index.jsx";
import { WebDesignMainLayout } from "./pages/layout/WebDesignMainLayout.js";
import { CaseStudiesInnerPage } from "./pages/CaseStudies/CaseStudiesInnerPage/index.js";
import { CaseStudiesMainLayout } from "./pages/layout/CaseStudiesMainLayout.js";

export const PAGES = [
  {
    id: 1,
    name: "Case Studies",
    component: <CaseStudiesPage />,
    path: "/",
  },
  {
    id: 2,
    name: "Design Gallery",
    component: <WebDesignPage />,
    path: "/design-gallery",
  },
  {
    id: 3,
    name: "Graphic Design",
    component: <GraphicDesignPage />,
    path: "/graphic-design",
  },
  {
    id: 4,
    name: "Illustrations",
    component: <IllustrationPage />,
    path: "/illustrations",
  },
  {
    id: 5,
    name: "Tools",
    component: <ToolsPage />,
    path: "/tools",
  },
];

export const router = createBrowserRouter([
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

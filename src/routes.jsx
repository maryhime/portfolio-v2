import IllustrationPage from "./pages/Illustration/IllustrationPage.jsx";
import ToolsPage from "./pages/Tools/ToolsPage.jsx";
import WebDesignPage from "./pages/WebDesign/WebDesignPage";
import CaseStudiesPage from "./pages/CaseStudies/CaseStudiesPage";
import GraphicDesignPage from "./pages/GraphicDesign/GraphicDesignPage.jsx";

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

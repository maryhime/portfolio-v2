import { Outlet, useParams } from "react-router-dom";
import CaseStudiesPage from "../CaseStudies/CaseStudiesPage";

export const CaseStudiesMainLayout = () => {
  const { id } = useParams();

  return <>{id ? <Outlet /> : <CaseStudiesPage />}</>;
};

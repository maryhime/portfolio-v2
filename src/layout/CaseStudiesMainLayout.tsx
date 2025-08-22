import { Outlet, useParams } from "react-router-dom";
import CaseStudiesPage from "@/pages/CaseStudies";

export const CaseStudiesMainLayout = () => {
  const { id } = useParams();

  return <>{id ? <Outlet /> : <CaseStudiesPage />}</>;
};

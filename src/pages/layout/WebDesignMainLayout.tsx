import { Outlet, useParams } from "react-router-dom";
import WebDesignPage from "../WebDesign/WebDesignPage";

export const WebDesignMainLayout = () => {
  const { id } = useParams();

  return <>{id ? <Outlet /> : <WebDesignPage />}</>;
};

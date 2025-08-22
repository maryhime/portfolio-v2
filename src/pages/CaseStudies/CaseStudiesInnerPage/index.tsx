import { useParams } from "react-router-dom";
import { CASE_STUDIES_MOCK_DATA } from "../../../_mock/case-studies";

export const CaseStudiesInnerPage = () => {
  const { id } = useParams();
  const caseStudies = CASE_STUDIES_MOCK_DATA.find(
    (item) => item.id === Number(id) // convert param to number
  );

  if (!caseStudies) {
    return <div>Design not found</div>;
  }
  return (
    <div>
      <h1>Project Details</h1>
      <p>ID: {caseStudies.id}</p>
      <p>Project Name: {caseStudies.project_name}</p>
    </div>
  );
};

import { useParams } from "react-router-dom";
import { DESIGN_GALLERY_MOCK_DATA } from "@/_mock/design-galery";

export const WebDesignInnerPage = () => {
  const { id } = useParams();
  const design = DESIGN_GALLERY_MOCK_DATA.find(
    (item) => item.id === Number(id) // convert param to number
  );

  if (!design) {
    return <div>Design not found</div>;
  }

  return (
    <div>
      <h1>Project Details</h1>
      <p>ID: {design.id}</p>
      <p>Project Name: {design.project_name}</p>
    </div>
  );
};

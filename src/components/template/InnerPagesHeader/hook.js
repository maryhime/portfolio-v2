import { useNavigate } from "react-router-dom";

export const useHooks = () => {
  const navigate = useNavigate();

  const handleNavigateBack = () => navigate(-1);

  return {
    handleNavigateBack,
  };
};

const navPages = [
  {
    id: 1,
    name: "Case Studies",
    path: "/",
  },
  {
    id: 2,
    name: "Design Gallery",
    path: "/design-gallery",
  },
  {
    id: 3,
    name: "Graphic Design",
    path: "/graphic-design",
  },
  // {
  //   id: 4,
  //   name: "Illustrations",
  //   path: "/illustrations",
  // },
  {
    id: 4,
    name: "Tools",
    path: "/tools",
  },
];

export const useHooks = () => {
  const navStyles = ({ isActive }) => {
    return {
      backgroundColor: isActive ? "#FDDDEB" : "",
      border: isActive ? "1px solid #F399D0" : "1px solid #F399D0",
      color: isActive ? "#D753BD" : "#D753BD",
    };
  };

  return { navStyles, navPages };
};

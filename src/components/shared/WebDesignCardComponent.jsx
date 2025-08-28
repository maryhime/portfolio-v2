import { NavLink } from "react-router-dom";

export const WebDesignCardComponent = ({
  id,
  title,
  category,
  image,
  link,
}) => {
  return (
    <NavLink
      to={`/design-gallery/${id}`}
      className="px-24 pt-24 flex flex-col gap-24 w-full justify-between hover:text-primary-500"
    >
      <div className="flex flex-col gap-8 ">
        <h4 className="text-card uppercase select-none">{title}</h4>
        <p className="text-card-category text-body-text capitalize select-none">
          {category}
        </p>
      </div>
      <div class="pt-24 relative inline-block group">
        <img
          src={`images/${image}`}
          alt=""
          className="w-full h-auto pointer-events-none select-none"
          oncontextmenu="return false;"
        />
      </div>

    </NavLink>
  );
};

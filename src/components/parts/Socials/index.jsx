import { NavLink } from "react-router-dom";

export const Socials = ({ contacts }) => {
  return (
    <div className="flex flex-row gap-[20px] justify-center items-center align-middle">
      {contacts.map((icons, index) => (
        <NavLink key={index} to={icons.link} target="_blank" rel="noreferrer">
          <img
            src={`/icons/${icons.icon}`}
            className=" w-[24px] h-[24px] desktop:w-[32px] desktop:h-[32px]"
          />
        </NavLink>
      ))}
    </div>
  );
};

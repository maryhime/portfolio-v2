import React from "react";
import { PAGES } from "../routes";
import { NavLink } from "react-router-dom";
import { downloadResume } from "../utils/download";

export const Navbar = ({ close }) => {
  const navStyles = ({ isActive }) => {
    return {
      backgroundColor: isActive ? "#C081C1" : "",
      border: isActive ? "" : "1px solid #C081C1",
      color: isActive ? "#FCFDFC" : "#C081C1",
    };
  };

  const handleDownload = () => {
    return window.open("/public/files/Caseria-Mary-Therese-Resume.pdf");
  };

  return (
    <div className="grid grid-cols-2 gap-8">
      {PAGES.map((value, index) => (
        <NavLink
          to={value.path}
          key={index}
          style={navStyles}
          onClick={close}
          className={
            "p-8 flex gap-[10px] rounded-button h-button text-button uppercase w-full justify-center items-center "
          }
        >
          {value.name}
        </NavLink>
      ))}
      <button
        onClick={handleDownload}
        className={
          "p-8 flex gap-[10px] rounded-button h-button text-button uppercase w-full justify-center items-center border-solid border-[1px] border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-primary-100"
        }
      >
        Resume
      </button>
    </div>
  );
};

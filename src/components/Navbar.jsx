import React from "react";
import { PAGES } from "../routes";
import { NavLink } from "react-router-dom";
import { downloadResume } from "../utils/download";

export const Navbar = ({ close }) => {
  const navStyles = ({ isActive }) => {
    return {
      backgroundColor: isActive ? "#FDDDEB" : "",
      border: isActive ? "1px solid #F399D0" : "1px solid #F399D0",
      color: isActive ? "#D753BD" : "#D753BD",
    };
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
            "p-8 flex gap-[10px] rounded-[99px] h-button text-button uppercase w-full justify-center items-center "
          }
        >
          {value.name}
        </NavLink>
      ))}
      <button
        onClick={downloadResume}
        className={
          "p-8 flex gap-[10px] rounded-[99px] h-button text-button uppercase w-full justify-center items-center border-solid border-[1px] border-primary-300 text-primary-500 hover:bg-primary-200 hover:text-primary-500"
        }
      >
        Resume
      </button>
    </div>
  );
};

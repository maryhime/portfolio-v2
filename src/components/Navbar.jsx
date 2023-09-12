import React from "react";
import { PAGES } from "../routes";
import { NavLink } from "react-router-dom";

export const Navbar = () => {
  const navStyles = ({ isActive }) => {
    return {
      backgroundColor: isActive ? '#C081C1' : '',
      border : isActive ? '' : '1px solid #C081C1',
      color : isActive ? '#FCFDFC' : '#C081C1',
    }
  }

  return (
    <div className="grid grid-cols-2 gap-8">
      {
        PAGES.map((value, index) =>
          <NavLink to={value.path} key={index} style={navStyles} className={'p-8 flex gap-[10px] rounded-button h-button text-button uppercase w-full justify-center items-center '} >
            {value.name}
          </NavLink>
        )
      }
    </div>
  );
}
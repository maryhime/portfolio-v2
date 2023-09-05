import React from "react";
import { PAGES } from "../routes";
import { NavPillComponent } from "./general/NavPillComponent";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className="grid grid-cols-2 gap-8">
      {
        PAGES.map((value, index) =>
          <Link to={value.path} key={index}>
            <NavPillComponent
              title={value.name} />
          </Link>
        )
      }
    </div>
  );
}
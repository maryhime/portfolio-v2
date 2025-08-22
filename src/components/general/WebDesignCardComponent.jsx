import React, { Fragment } from "react";
import { IconButtonComponent } from "./IconButtonComponent";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

export const WebDesignCardComponent = ({ title, category, image, link }) => {
  return (

      <a
        href={link}
        target="_blank"
        rel="noreferrer"
        className="px-24 pt-24 flex flex-col gap-24 w-full justify-between hover:text-primary-500"
      >
        <div className="flex flex-col gap-8 ">
          <h4 className="text-card uppercase select-none">{title}</h4>
          <p className="text-card-category text-body-text capitalize select-none">
            {category}
          </p>
        </div>
        <div className="pt-24 ">
          <img src={`images/${image}`} alt="" className="w-full h-auto" />
        </div>
        {/* <IconButtonComponent link={link} icon={faChevronRight} /> */}
      </a>

  );
};

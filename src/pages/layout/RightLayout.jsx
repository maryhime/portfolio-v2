import React from "react";
import WebDesignPage from "../WebDesignPage";
import { IconButtonComponent } from "../../components/general/IconButtonComponent";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";

export const RightLayout = () => {
  return (
    <div className=" flex flex-col px-24 py-48 tablet:px-48 laptop-lg:px-64 tablet:py-48 bg-background-gray w-full laptop:w-[75%] laptop-lg:w-[80%] desktop:[w-90%] font-inter laptop:overflow-auto scroll-smooth laptop:h-screen">

      {/* back to top icon */}
      <IconButtonComponent
        style={'laptop:hidden sticky top-full left-full shadow-lg '}
        icon={faChevronUp}
        size="w-[55px] h-[55px]"
        iconSize={'lg'} />

      <WebDesignPage />


    </div>
  )
}
import React from "react";
import { MainHeaderComponent } from "../../components/general/MainHeaderComponent";
import WebDesignPage from "../WebDesignPage";

export const RightLayout = () => {
  return (
   <div className="flex flex-col p-24 tablet:px-64 tablet:py-48 bg-background-gray w-full lapto:w-[70%] font-inter overflow-auto scroll-smooth  h-screen">
    <WebDesignPage/>
   </div>
  )
}
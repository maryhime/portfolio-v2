import React, { useState } from "react";
import WebDesignPage from "../WebDesignPage";
import { IconButtonComponent } from "../../components/general/IconButtonComponent";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import CaseStudiesPage from "../CaseStudiesPage";
import IllustrationPage from "../IllustrationPage";
import ToolsPage from "../ToolsPage";
import { InnerPagesHeader } from "../../components/InnerPagesHeader";
import { PAGELIST } from "../../routes";
import InnerPagesLayout from "./InnerPagesLayout";

export const RightLayout = ({ page }) => {

  return (
    <div className=" flex flex-col px-24 py-48 tablet:px-48 tablet:py-48 bg-background-gray w-full laptop:w-[75%] laptop:p-[2%] desktop:p-[4%] laptop-lg:w-[80%] desktop:[w-50%] font-inter laptop:overflow-auto scroll-smooth ">

      {/* back to top icon */}
      {/* <IconButtonComponent
        style={'laptop:hidden sticky top-[90%] left-full shadow-lg '}
        icon={faChevronUp}
        size="w-[55px] h-[55px]"
        iconSize={'lg'} /> */}

      <WebDesignPage />
      <CaseStudiesPage/>
      <IllustrationPage/>
      
      <ToolsPage/>

      <InnerPagesLayout></InnerPagesLayout>

      {
        PAGELIST.map((element, index) => page === element.path ? element.component : <></>)
      }
    </div>
  )
}
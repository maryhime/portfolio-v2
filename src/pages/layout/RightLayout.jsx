import React from "react";
import WebDesignPage from "../WebDesignPage";
import { IconButtonComponent } from "../../components/general/IconButtonComponent";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import CaseStudiesPage from "../CaseStudiesPage";
import IllustrationPage from "../IllustrationPage";
import ToolsPage from "../ToolsPage";
import { InnerPagesComponent } from "../../components/InnerPagesComponent";

export const RightLayout = () => {
  return (
    <div className=" flex flex-col px-24 py-48 tablet:px-48 tablet:py-48 bg-background-gray w-full laptop:w-[75%] laptop:px-[6%] desktop:p-[4%] laptop-lg:w-[80%] desktop:[w-50%] font-inter laptop:overflow-auto scroll-smooth ">

      {/* back to top icon */}
      {/* <IconButtonComponent
        style={'laptop:hidden sticky top-[90%] left-full shadow-lg '}
        icon={faChevronUp}
        size="w-[55px] h-[55px]"
        iconSize={'lg'} /> */}

      {/* <WebDesignPage /> */}
      {/* <CaseStudiesPage/> */}
      {/* <IllustrationPage/> */}
      {/* <ToolsPage/> */}
      <InnerPagesComponent 
      title={'asdjalsdjal'}
      subtitle={'sadhksdhkasdhfaksdh'}
      hasTwoIcons={false}
      icon1={'github.svg'}
      link1={'#'}
      />


    </div>
  )
}
import React from "react";
import { Route, Routes } from "react-router-dom";
import { PAGES } from "../../routes";

export const RightLayout = () => {

  return (
    <div className=" flex flex-col px-24 py-48 tablet:px-48 tablet:py-48 bg-background-gray w-full laptop:w-[75%] laptop:p-[2%] desktop:p-[4%] laptop-lg:w-[80%] desktop:[w-50%] font-inter laptop:overflow-auto scroll-smooth ">

      {/* <IconButtonComponent
        style={'laptop:hidden sticky top-[90%] left-full shadow-lg '}
        icon={faChevronUp}
        size="w-[55px] h-[55px]"
        iconSize={'lg'} /> */
      }

      {
        PAGES.map((element, index) =>
          <Routes key={index}>
            <Route path={element.path} element={element.component}></Route>
          </Routes>)
      }
    </div>
  )
}
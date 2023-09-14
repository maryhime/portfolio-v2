import React from "react";
import { Route, Routes } from "react-router-dom";
import { PAGES } from "../../routes";
import { PageNotFound } from './../../components/PageNotFound';
import { ScrollButton } from "../../components/ScrollButton";

export const RightLayout = () => {

  return (
    <div className=" flex flex-col px-24 py-48 tablet:px-48 tablet:py-48 bg-background-gray w-full laptop:w-[75%] laptop:p-[2%] desktop:p-[4%] laptop-lg:w-[80%] desktop:[w-50%] font-inter laptop:overflow-auto scroll-smooth pointer-events-auto  ">
      <ScrollButton />
      <Routes>
        <Route path='*' element={<PageNotFound />} />
        {
          PAGES.map((element, index) =>
            <Route
              path={element.path}
              element={element.component}
              key={index}
            />
          )
        }
      </Routes>
    </div>
  )
}
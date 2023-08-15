import React from "react";
import { NavBarComponent } from "../../components/NavBarComponent";

export const LeftLayout = () => {
  return (

    <div className="bg-[url('/images/sidebar-bg.svg')]  laptop:w-[35%] laptop-lg:w-[30%] desktop:w-[20%] laptop:h-screen flex flex-col justify-center items-center px-24 py-16 tablet:px-48 laptop:p-20 laptop:flex laptop:overflow-hidden phone:sticky phone:top-0">

      <NavBarComponent />

    </div>

  )
}
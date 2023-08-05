import React from "react";
import { NavBarComponent } from "../../components/NavBarComponent";

export const LeftLayout = () => {
  return (

    <div className="bg-[url('/images/sidebar-bg.svg')]  w-[330px] h-screen flex flex-col justify-center p-20 phone:hidden phone-lg:flex overflow-hidden ">

      <NavBarComponent />

    </div>

  )
}
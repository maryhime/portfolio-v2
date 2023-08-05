import React from "react";
import { NavBarComponent } from "../../components/NavBarComponent";

export const LeftLayout = () => {
  return (

    <div className="bg-[url('/images/sidebar-bg.svg')]  tablet:w-[35%] h-screen flex flex-col justify-center p-20 phone:hidden tablet:flex overflow-hidden ">

      <NavBarComponent />

    </div>

  )
}
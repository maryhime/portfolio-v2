import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import { LeftLayout } from "./LeftLayout";
import { MobileMenu } from "@/components/template/MobileMenu";
import { ScrollButton } from "@/components/parts/ScrollButton";

export const MainLayout = () => {
  const [openNav, setOpenNav] = useState(false);
  return (
    <div className="flex flex-col laptop:flex-row bg-white">
      {/* mobile nav */}
      <div className="bg-[url('/images/sidebar-bg.svg')] w-full flex flex-row justify-between laptop:hidden px-24 py-8 items-center">
        <img className="w-[130px]" src="images/logo-nav.svg" alt="" />
        <FontAwesomeIcon
          onClick={() => setOpenNav(true)}
          icon={faBars}
          size="xl"
          style={{ color: "#591863" }}
        />

        {openNav == true && (
          <MobileMenu close={() => setOpenNav((prev) => !prev)} />
        )}
      </div>

      {/* laptop nav */}
      <div className="bg-[url('/images/sidebar-bg.svg')] hidden laptop:w-[33%] laptop-lg:w-[30%] desktop:w-[25%] laptop:h-screen flex-col justify-center items-center  tablet:px-48 laptop:p-20  laptop:flex  laptop:overflow-hidden phone:sticky phone:top-0 select-none ">
        <LeftLayout />
      </div>

      {/* contents */}
      <div className=" flex flex-col background-gradient w-full laptop:w-[75%]  desktop:p-[4%] laptop-lg:w-[80%] desktop:[w-50%] font-inter laptop:overflow-auto scroll-smooth pointer-events-auto  border-l-[1px] border-[#F8D7F0]">
        <ScrollButton />
        <Outlet />
      </div>
    </div>
  );
};

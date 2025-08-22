import React, { Fragment, useState } from "react";
import { USER_INFO } from "../../utils/data";
import { Navbar } from "../../components/Navbar";
import { Profile } from "../../components/Profile";
import { Socials } from "./../../components/Socials";

export const LeftLayout = () => {
  return (
    <Fragment>
      {USER_INFO.map((value, index) => (
        <div
          key={index}
          className="bg-white p-24 desktop:p-48 hidden laptop:flex flex-col gap-24 shadow-side-bar rounded-[12px] font-inter laptop:w-full laptop-lg:w-[95%] desktop:w-[90%]   "
        >
          {/* Profile Section */}
          <Profile name={value.name} avatar={value.avatar} />

          {/* Navigations */}
          <Navbar />

          {/*  Social Media Contacts */}
          <Socials contacts={value.contacts} />
        </div>
      ))}
    </Fragment>
  );
};

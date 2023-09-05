import React, { Fragment } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { USER_INFO } from '../../utils/data';
import { Navbar } from '../../components/Navbar';
import { Profile } from '../../components/Profile';
import { Socials } from './../../components/Socials';

export const LeftLayout = () => {
  return (
    <Fragment>
      <Fragment>
        <div className="w-full flex flex-row justify-between laptop:hidden  items-center">
          <img className='w-[130px]' src="images/logo-nav.svg" alt="" />
          <FontAwesomeIcon icon={faBars} size="xl" style={{ color: "#591863", }} />
        </div>

        {USER_INFO.map((value, index) =>

          <div key={index} className='bg-white p-24 desktop:p-48 hidden laptop:flex flex-col gap-24 shadow-side-bar rounded-button font-inter laptop:w-full laptop-lg:w-[95%] desktop:w-[90%] '>

            {/* Profile Section */}
            <Profile
              name={value.name}
              avatar={value.avatar}
            />

            {/* Navigations */}
            <Navbar />

            {/*  Social Media Contacts */}
            <Socials
              contacts={value.contacts}
            />
          </div>
        )
        }

      </Fragment>
    </Fragment>
  )
}
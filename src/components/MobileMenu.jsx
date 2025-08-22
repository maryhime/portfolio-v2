import { faClose } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { PAGES } from '../routes'
import { NavLink } from 'react-router-dom'
import { LeftLayout } from '../pages/layout/LeftLayout'
import { USER_INFO } from '../utils/data'
import { Profile } from './Profile'
import { Socials } from './Socials'
import { Navbar } from './Navbar'

export const MobileMenu = ({ close }) => {
  return (
    <div className="fixed z-50 top-0 left-0 bg-white h-screen w-screen flex flex-col p-24 gap-48">

      <div className="flex justify-end">
        <FontAwesomeIcon onClick={close} icon={faClose} size="xl" style={{ color: "#591863", }} />
      </div>

      <div className="flex justify-center">

        {USER_INFO.map((value, index) =>

          <div key={index} className="flex flex-col gap-24 justify-center px-16 phone-lg:max-w-[55%] tablet:max-w-[40%]">

            {/* Profile Section */}
            <Profile
              name={value.name}
              avatar={value.avatar}
            />

            {/* Navigations */}
            <Navbar close={close} />

            {/*  Social Media Contacts */}
            <Socials
              contacts={value.contacts}
            />
          </div>
        )}
      </div>
      
    </div>
  )
}

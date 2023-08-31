import React, { Fragment } from 'react'

export const NavPillComponent = ({ title, link }) => {

  return (
    <a href={link} className={`p-8 flex gap-[10px] rounded-button h-button text-button uppercase w-full justify-center items-center hover:bg-primary-500 hover:text-white text-primary-500 border border-primary-500 `}>
      {title}
    </a>

  )
}

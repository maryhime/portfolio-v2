import React, { Fragment } from 'react'

export const NavPillComponent = ({ title, style }) => {

  return (
    <button className={`p-8 flex gap-[10px] rounded-button h-button text-button uppercase w-full justify-center items-center hover:bg-primary-500 hover:text-white ${style}`}>
      {title}
    </button>

  )
}

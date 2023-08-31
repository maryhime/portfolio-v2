import React from 'react'

export const ButtonComponent = ({title, style, link}) => {
  return (
    <a href={link} className={`p-8 flex gap-[10px] rounded-button h-button text-button uppercase justify-center items-center hover:bg-primary-500 hover:text-white text-primary-500 border border-primary-500 w-[50%] ${style}`}>
      {title}
    </a>
  )
}

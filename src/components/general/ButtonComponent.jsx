import React from 'react'

export const ButtonComponent = ({title, style, link, target}) => {
  return (
    <a href={link}  target={target}
        rel="noreferrer" className={`p-8 flex gap-[10px] text-nowrap rounded-button h-button text-button uppercase justify-center items-center bg-primary-500 text-white w-[50%] hover:bg-primary-800 ${style}`}>
      {title}
    </a>
  )
}

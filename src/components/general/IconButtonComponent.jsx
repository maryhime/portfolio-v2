import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export const IconButtonComponent = ({icon, iconSvg, style, size='w-[44px] h-[44px]', iconSize, link}) => {
  return (
    <a href={link} target='_self' rel='noreferrer' className={` rounded-[30px] p-[10px] shadow-side-bar bg-background-white ${size} flex justify-center items-center ${style}`}>
      <FontAwesomeIcon icon={icon} size={iconSize} style={{color: "#591863",}} />
      <img src={`/icons/${iconSvg}`} alt="" />
    </a>
  )
}

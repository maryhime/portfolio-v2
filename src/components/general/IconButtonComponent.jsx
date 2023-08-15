import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export const IconButtonComponent = ({icon, style, size='w-[44px] h-[44px]', iconSize}) => {
  return (
    <div className={` rounded-[30px] p-[10px] shadow-side-bar bg-background-white ${size} flex justify-center items-center ${style}`}>
      <FontAwesomeIcon icon={icon} size={iconSize} style={{color: "#591863",}} />
    </div>
  )
}

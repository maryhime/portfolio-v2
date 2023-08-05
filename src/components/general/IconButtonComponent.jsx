import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export const IconButtonComponent = ({icon}) => {
  return (
    <div className=" rounded-[30px] p-[10px] shadow-side-bar bg-background-white w-[44px] h-[44px] flex justify-center items-center">
      <FontAwesomeIcon icon={icon} style={{color: "#591863",}} />
    </div>
  )
}

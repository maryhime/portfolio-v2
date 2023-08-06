import React from 'react'

export const CardContainerComponent = ({children}) => {
  return (
    <div className="rounded-card border border-primary-500 bg-background-white shadow-card flex flex-col gap-48 pt-24 hover:text-primary-500 text-heading ">

      {children}
    </div>
  )
}

import React from 'react'

export const MainHeaderComponent = ({ title, subtitle }) => {
  return (
    <div className="flex flex-row gap-8 w-full">
      <div className="hidden laptop:flex">
        <img className='w-[25px]' src="icons/arrow.svg" alt="" />
      </div>
      <div className="flex flex-col gap-16 w-full">
        <h1 className='text-heading text-title tablet:text-title-tablet laptop:text-title uppercase'>
          {title}
        </h1>
        <p className='text-body text-body-text'>
          {subtitle}
        </p>
      </div>
    </div>
  )
}

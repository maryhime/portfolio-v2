import React from 'react'

export const MainHeaderComponent = ({ title, subtitle }) => {
  return (
    <div className="flex flex-row gap-8 w-full">
      <div className="hidden laptop:flex">
        <img className='desktop:w-[25px]' src="icons/arrow.svg" alt="" />
      </div>
      <div className="flex flex-col gap-8 w-full">
        <h1 className='text-heading text-title tablet:text-title-tablet laptop:text-title desktop:text-title-desktop uppercase'>
          {title}
        </h1>
        <p className='text-body text-body-text desktop:text-body-desktop'>
          {subtitle}
        </p>
      </div>
    </div>
  )
}

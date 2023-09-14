import React from 'react'

export const MainHeaderComponent = ({ title, subtitle, style }) => {
  return (
    <div className={`flex flex-row gap-16 ${style}`}>
      <div className="hidden laptop:flex">
        <img className='desktop:w-[25px]' src="icons/arrow.svg" alt="" />
      </div>
      <div className="flex flex-col gap-8 w-full">
        <h1 className='text-heading text-title-phone tablet:text-title-tablet laptop:text-title uppercase'>
          {title}
        </h1>
        <p className='text-body text-body-text desktop:text-body-desktop'>
          {subtitle}
        </p>
      </div>
    </div>
  )
}

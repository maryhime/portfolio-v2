import React from 'react'
import { IconButtonComponent } from './IconButtonComponent'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'

export const WebDesignCardComponent = ({ title, category, image, link }) => {
  return (
    <div className="rounded-card border border-primary-500 bg-background-white shadow-card flex flex-col gap-48 pt-24 hover:text-primary-500 text-heading ">
      <div className="px-24 flex flex-row gap-24 w-full justify-between">
        <div className="flex flex-col gap-8 ">
          <h4 className='text-card   uppercase'>
            {title}
          </h4>
          <p className='text-card-category text-body-text uppercase'>
            {category}
          </p>
        </div>
        <a href={link}>
          <IconButtonComponent icon={faChevronRight} />
        </a>
      </div>
      <div className="flex pl-[44px] justify-end">
        <img src={`images/${image}`} alt="" />
      </div>


    </div>
  )
}

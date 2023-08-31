import React from 'react'
import { ButtonComponent } from './ButtonComponent'

export const CaseStudyCardComponent = ({ title, category, image, link, desc }) => {
  return (
    <div className='px-24 flex flex-col gap-24 w-full justify-end'>
      <img src={`images/${image}`} alt="" />

      <div className='flex flex-col gap-8 '>
        <h6 className='text-card-category uppercase text-primary-500'>
          {category}
        </h6>
        <h4 className='text-card uppercase'>
          {title}
        </h4>
      </div>
      <div className='flex flex-row gap-8 w-full '>
        <img className='' src='icons/arrow.svg' alt="" />
        <p className='text-body text-body-text line-clamp-2 desktop:line-clamp-5 '>
          {desc}
        </p>
      
      </div>
      <div className="flex w-full justify-end">
        <ButtonComponent 
        title={'Read More'} 
        link={'#'} 
        style={''}/>
      </div>
    </div>
  )
}

import React from 'react'

export const CaseStudyCardComponent = ({ title, category, image, link, desc }) => {
  return (
    <div className='px-24 flex flex-col gap-24 w-full justify-end'>
      <img src={`images/${image}`} alt="" />

      <div className='flex flex-col gap-8 '>
        <h6 className='text-card-category uppercase text-primary-500'>
          {category}
        </h6>
        <h4 className='text-card  uppercase'>
          {title}
        </h4>
      </div>
      <div className='flex flex-row gap-8 w-full'>
        <img className='w-[25px]' src='icons/arrow.svg' alt="" />
        <p className='text-body text-body-text'>
          {desc}
        </p>
      </div>
    </div>
  )
}

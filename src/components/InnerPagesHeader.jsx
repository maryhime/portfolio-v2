import React, { Fragment } from 'react'
import { IconButtonComponent } from './general/IconButtonComponent'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { PillsComponent } from './general/PillsComponent'

export const InnerPagesHeader = ({ title, subtitle, icon1, icon2, hasTwoIcons = false, link1, link2 }) => {


  return (
    <div className="flex flex-row justify-between items-center">
      <div className="flex flex-row gap-24 items-center w-full">
        <IconButtonComponent icon={faArrowLeft} link={'#'} />
        <div className="flex flex-col gap-8 w-full">
          <div className="flex flex-col w-full">
             <h1 className='text-heading text-title-tablet laptop:text-title uppercase'>
            {title}
          </h1>
          <p className='text-body text-body-text desktop:text-body-desktop'>
            {subtitle}
          </p>
          </div>
         
          <PillsComponent title={'Tailwind'}/>
        </div>
      </div>

      <div className="flex flex-row gap-16">
        {hasTwoIcons ? (
          <Fragment>
            <IconButtonComponent link={link1} iconSvg={icon1} />
            <IconButtonComponent link={link2} iconSvg={icon2} />
          </Fragment>
        ) : (
          <IconButtonComponent link={link1} iconSvg={icon1} />
        )}

      </div>
    </div>
  )
}

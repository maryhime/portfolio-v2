import React, { Fragment, useState } from 'react'
import { MainHeaderComponent } from './general/MainHeaderComponent'
import { IconButtonComponent } from './general/IconButtonComponent'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'

export const InnerPagesComponent = ({ title, subtitle, icon1, icon2, hasTwoIcons = false, link1, link2 }) => {



  return (
    <div className="flex flex-row justify-between">
      <div className="flex flex-row gap-24">
        <IconButtonComponent icon={faChevronLeft} link={'#'} />
        <MainHeaderComponent
          title={title}
          subtitle={subtitle}
        />
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

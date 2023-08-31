import React from 'react'
import { MainHeaderComponent } from './general/MainHeaderComponent'
import { IconButtonComponent } from './general/IconButtonComponent'

export const InnerPagesComponent = ({title, subtitle}) => {
  return (
    <div className="flex flex-row">
      <IconButtonComponent icon={}/>
      <MainHeaderComponent
        title={title}
        subtitle={subtitle}
      />
    </div>
  )
}

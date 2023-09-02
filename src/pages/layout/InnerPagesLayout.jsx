import React from 'react'
import { InnerPagesHeader } from '../../components/InnerPagesHeader'

const InnerPagesLayout = ({ title, subtitle, icon1, icon2, hasTwoIcons, link1, link2, children }) => {
  return (
    <div className="flex flex-col gap-64">
      <InnerPagesHeader
        title={title}
        subtitle={subtitle}
        hasTwoIcons={hasTwoIcons}
        icon1={icon1}
        link1={link1}
        icon2={icon2}
        link2={link2}
      />

      {children}

    </div>
  )
}

export default InnerPagesLayout
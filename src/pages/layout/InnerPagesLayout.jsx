import React from 'react'
import { InnerPagesHeader } from '../../components/InnerPagesHeader'

const InnerPagesLayout = ({ title, subtitle, hasButton, link, children, backgroundImage }) => {
  return (
    <div className={'flex flex-col gap-[32px] select-none bg-[#FCFCFC]'}>
      <InnerPagesHeader
        title={title}
        subtitle={subtitle}
        hasButton={hasButton}
        link={link}
        backgroundImage={backgroundImage}
      />

      <div className="px-24 pb-48 tablet:px-48 tablet:pb-48 laptop:pb-64 laptop:px-48 flex flex-col gap-[32px]">
        {children}
      </div>



    </div>
  )
}

export default InnerPagesLayout
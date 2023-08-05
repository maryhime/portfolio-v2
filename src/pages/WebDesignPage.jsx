import React, { Fragment } from 'react'
import { MainHeaderComponent } from '../components/general/MainHeaderComponent'
import { WebDesignCardComponent } from '../components/general/WebDesignCardComponent'
import { IconButtonComponent } from '../components/general/IconButtonComponent'
import { WEB_DESIGN } from '../utils/data'

const WebDesignPage = () => {
  return (
    <div className="flex flex-col phone-lg:flex-row gap-64  w-full ">
      <div className='flex flex-col gap-64 w-full '>
        <MainHeaderComponent title={'Web Design & Development'} subtitle={'Website Pages and applications that I have created during the course of my career and free time.'} />
        <div className="tablet:flex tablet:flex-col tablet:gap-48 hidden">
         {WEB_DESIGN.slice(0,5).map((value, index)=>
          <WebDesignCardComponent key={index} title={value.title} category={value.desc} image={value.image} link={value.link}/>
         )}
        </div>
        <div className="grid grid-cols-1 phone-lg:grid-cols-2 gap-24 tablet:hidden">
         {WEB_DESIGN.map((value, index)=>
          <WebDesignCardComponent key={index} title={value.title} category={value.desc} image={value.image} link={value.link}/>
         )}
        </div>
        
      </div>
      <div className=" hidden tablet:flex tablet:flex-col tablet:gap-48 w-full">
         {WEB_DESIGN.slice(5,10).map((value, index)=>
          <WebDesignCardComponent key={index} title={value.title} category={value.desc} image={value.image} link={value.link}/>
         )}
        </div>
 
    </div>

  )
}

export default WebDesignPage
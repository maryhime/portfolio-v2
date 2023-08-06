import React, { Fragment } from 'react'
import { NavPillComponent } from './general/NavPillComponent'
import { NAVIGATIONS, USER_INFO } from '../utils/data'


export const NavBarComponent = () => {
  const [active, setActive] = React.useState(false)


  return (
    <Fragment>
      {USER_INFO.map((value, index) =>

        <div key={index} className='bg-white p-24 flex flex-col gap-24 shadow-side-bar rounded-button font-inter w-full '>

          <div className="flex flex-col gap-24">
            <div className=" flex justify-center align-middle">
              <img src={`images/${value.avatar}`} alt="avatar" className='rounded-[5px]  w-[230px]' />

            </div>


            <div className="flex flex-col gap-16 w-full">
              <h4 className='text-heading uppercase text-[20px] laptop-lg:text-[24px] font-[700]'>
                Hello,
                I'm {value.name}
              </h4>
              <p className='text-body text-body-text 
            '>
                A UI/UX Designer in Baguio City.

                I create delightful experiences with empathy for users.
              </p>

            </div>
          </div>
          <div className="grid grid-cols-2 gap-8">
            {NAVIGATIONS.map((value, index) =>
              <button key={index} href="">
                <NavPillComponent
                  style={"text-primary-500 border border-primary-500"} title={value} />
              </button>

            )}

          </div>
          <div className="flex flex-row gap-[20px] justify-center items-center align-middle">
            {value.contacts.map((icons, index) =>

              <>
                <a href={icons.link} target='_blank' rel='noreferrer'>
                  <img key={index} src={`icons/${icons.icon}`} className='w-[24px] h-[24px]' />
                </a>
              </>
            )}

          </div>
        </div>
      )}
    </Fragment>
  )
}

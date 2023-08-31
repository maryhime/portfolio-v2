import React, { Fragment } from 'react'
import { NavPillComponent } from './general/NavPillComponent'
import { NAVIGATIONS, USER_INFO } from '../utils/data'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons';


export const NavBarComponent = () => {

  return (
    <Fragment>
        <div className="w-full flex flex-row justify-between laptop:hidden  items-center">
          <img className='w-[130px]' src="images/logo-nav.svg" alt="" />
          <FontAwesomeIcon icon={faBars} size="xl" style={{color: "#591863",}} />
        </div>

        {USER_INFO.map((value, index) =>

          <div key={index} className='bg-white p-24 desktop:p-48 hidden laptop:flex flex-col gap-24 shadow-side-bar rounded-button font-inter laptop:w-full laptop-lg:w-[85%] desktop:w-[80%]  desktop:h-[80%]'>

            <div className="flex flex-col gap-24">
              <div className=" flex justify-center align-middle desktop:w-full laptop:h-[150px] desktop:h-auto ">
                {/* <img src={`images/${value.avatar}`} alt="avatar" className='rounded-[5px] laptop:w-[150px] desktop:w-full ' /> */}
                <img src={`images/placeholder.svg`} alt="avatar" className='rounded-[5px] laptop:w-[150px] desktop:w-full ' />

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
                    title={value} />
                </button>

              )}

            </div>
            <div className="flex flex-row gap-[20px] justify-center items-center align-middle">
              {value.contacts.map((icons, index) =>
                <a key={index} href={icons.link} target='_blank' rel='noreferrer'>
                  <img src={`icons/${icons.icon}`} className=' w-[24px] h-[24px] desktop:w-[32px] desktop:h-[32px]' />
                </a>
              )}

            </div>
          </div>
        )
        }
    
    </Fragment>


  )
}

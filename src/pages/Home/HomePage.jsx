import React, { Fragment, useState } from 'react';
import { LeftLayout } from '../layout/LeftLayout';
import { RightLayout } from '../layout/RightLayout';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { MobileMenu } from '../../components/MobileMenu';

const HomePage = () => {
  const [openNav, setOpenNav] = useState(false);
  return (
    <Fragment>
      <div className='flex flex-col laptop:flex-row bg-white'>
        {/* mobile nav */}
        <div className="bg-[url('/images/sidebar-bg.svg')] w-full flex flex-row justify-between laptop:hidden px-24 py-8 items-center">
          <img className='w-[130px]' src="images/logo-nav.svg" alt="" />
          <FontAwesomeIcon onClick={()=>setOpenNav(true)} icon={faBars} size="xl" style={{ color: "#591863", }} />

          {openNav == true && <MobileMenu close={()=>setOpenNav((prev) => !prev)}/>}
        </div>

        {/* laptop nav */}
        <div className="bg-[url('/images/sidebar-bg.svg')] hidden laptop:w-[33%] laptop-lg:w-[30%] desktop:w-[25%] laptop:h-screen flex-col justify-center items-center  tablet:px-48 laptop:p-20  laptop:flex  laptop:overflow-hidden phone:sticky phone:top-0 select-none ">
          <LeftLayout />
        </div>

        {/* contents */}
        <RightLayout />
      </div>
    </Fragment>
  );
}

export default HomePage;




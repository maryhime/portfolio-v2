import React, { Fragment } from 'react';
import { LeftLayout } from '../layout/LeftLayout';
import { RightLayout } from '../layout/RightLayout';

const HomePage = () => {

  return (
    <Fragment>
      <div className='flex flex-col laptop:flex-row '>
        <div className="bg-[url('/images/sidebar-bg.svg')]  laptop:w-[33%] laptop-lg:w-[30%] desktop:w-[25%] laptop:h-screen flex flex-col justify-center items-center px-24 py-16 tablet:px-48 laptop:p-20  laptop:flex  laptop:overflow-hidden phone:sticky phone:top-0">
          <LeftLayout />
        </div>
        <RightLayout />
      </div>
    </Fragment>
  );
}

export default HomePage;




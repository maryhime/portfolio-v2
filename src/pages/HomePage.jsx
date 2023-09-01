import React, { Fragment, useState } from 'react';
import { RightLayout } from './layout/RightLayout';
import { LeftLayout } from './layout/LeftLayout';
import { NavBarComponent } from './../components/NavBarComponent';

const HomePage = () => {
  const [page, setPage] = useState('web-design');

  return (
    <div className='flex flex-col laptop:flex-row '>
      <div className="bg-[url('/images/sidebar-bg.svg')]  laptop:w-[33%] laptop-lg:w-[30%] desktop:w-[25%] laptop:h-screen flex flex-col justify-center items-center px-24 py-16 tablet:px-48 laptop:p-20  laptop:flex  laptop:overflow-hidden phone:sticky phone:top-0">
        <NavBarComponent setPage={setPage} />
      </div>
      {/* <LeftLayout /> */}
      <RightLayout page={page} />
    </div>

  );
}

export default HomePage;




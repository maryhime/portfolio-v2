import React, { Fragment } from 'react';
import { RightLayout } from './layout/RightLayout';
import { LeftLayout } from './layout/LeftLayout';

const HomePage = () => {
  return (
      <div className='flex flex-col laptop:flex-row'>
      
        <LeftLayout />
        <RightLayout />
      </div>

  );
}

export default HomePage;




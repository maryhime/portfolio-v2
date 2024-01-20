import React from "react";

export const Profile = ({ name, avatar }) => {
  return (
    <div className="flex flex-col gap-24">
      <div className=" flex justify-center align-middle desktop:w-full laptop:h-[150px] desktop:h-auto ">
        <img src={`images/${avatar}`} alt="avatar" className='rounded-[5px] w-[200px] laptop:w-[150px] desktop:w-full ' />
        {/* <img src={`images/placeholder.svg`} alt="avatar" className='rounded-[5px] laptop:w-[150px] desktop:w-full ' /> */}

      </div>


      <div className="flex flex-col gap-16 w-full">
        <h4 className='text-heading uppercase text-[20px] laptop-lg:text-[24px] font-[700]'>
          Hello,
          I'm {name}
        </h4>
        <p className='text-body text-body-text 
            '>
          A UI/UX Designer from Pangasinan.
          I create delightful experiences with empathy for users.
        </p>

      </div>
    </div>
  );
}
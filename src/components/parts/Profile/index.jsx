export const Profile = ({ name, avatar }) => {
  return (
    <div className="flex flex-col gap-24">
      <div className=" flex justify-center align-middle desktop:w-full desktop:h-full laptop:h-[322px] ">
        <img
          src={`/images/${avatar}`}
          alt="avatar"
          className="rounded-[5px] w-[200px]  laptop:w-full "
        />
      </div>

      <div className="flex flex-col gap-8 w-full">
        <h4 className="text-heading uppercase text-[20px] laptop-lg:text-[24px] font-[800]">
          Hello, <br></br>
          I'm {name}
        </h4>
        <p
          className="text-body text-body-text
            "
        >
          A UI/UX Designer from Pangasinan. I create delightful experiences with
          empathy for users.
        </p>
      </div>
    </div>
  );
};

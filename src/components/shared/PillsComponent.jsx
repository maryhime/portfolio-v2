export const PillsComponent = ({ title, style, ...others }) => {
  return (
    <div
      className={`text-white w-fit rounded-[30px] text-[12px] uppercase font-[700] px-[12px] py-[6px] font-inter items-center text-nowrap ${style}`}
      {...others}
    >
      {title}
    </div>
  );
};

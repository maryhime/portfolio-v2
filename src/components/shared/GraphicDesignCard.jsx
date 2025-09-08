import React from "react";

const GraphicDesignCard = ({ title, image, desc, subtitle }) => {
  return (
    <div className="px-24 pt-24 pb-[32px] flex flex-col gap-24 select-none">
      <div class="relative inline-block group">
        <img
          className="rounded-[8px] pointer-events-none select-none"
          oncontextmenu="return false;"
          src={`/images/graphic-design/${image}`}
          alt=""
        />
      </div>

      <div className="flex flex-col gap-[12px]">
        <div className="flex flex-col gap-8">
          <h6 className="text-[16px] font-bold uppercase text-primary-500">
            {subtitle}
          </h6>
          <h4 className="text-card uppercase">{title}</h4>
        </div>

        <p className="text-body text-body-text ">{desc}</p>
      </div>
    </div>
  );
};

export default GraphicDesignCard;

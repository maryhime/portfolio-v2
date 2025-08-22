import React from "react";
import { ButtonComponent } from "./ButtonComponent";

export const CaseStudyCardComponent = ({
  id,
  title,
  category,
  image,
  link,
  desc,
}) => {
  return (
    <div className="px-[32px] pt-[32px] pb-[8px]  flex flex-col gap-24 w-full justify-end select-none">
      <img src={`images/case-studies/thumbnails/${image}`} alt="" />

      <div className="flex flex-col gap-[12px]">
        <div className="flex flex-col gap-8 ">
          <h6 className="text-card-category font-bold uppercase text-primary-500">
            {category}
          </h6>
          <h4 className="text-case-study-card capitalize">{title}</h4>
        </div>
        <p className="text-body text-body-text line-clamp-2 desktop:line-clamp-5 w-full ">
          {desc}
        </p>
      </div>

      <div className="flex w-full">
        <ButtonComponent title={"Read More"} link={id} style={""} />
      </div>
    </div>
  );
};

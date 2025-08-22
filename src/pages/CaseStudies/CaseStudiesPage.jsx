import React, { Fragment } from "react";
import { MainHeaderComponent } from "../../components/shared/MainHeaderComponent";
import { CardContainerComponent } from "../../components/shared/CardContainerComponent";
import { CaseStudyCardComponent } from "../../components/shared/CaseStudyCardComponent";
import { CASE_STUDIES } from "../../utils/data";
import { Outlet } from "react-router-dom";

const CaseStudiesPage = () => {
  return (
    <Fragment>
      <div className="flex flex-col gap-24 laptop:gap-[48px] w-full  px-24 py-48 tablet:px-48 tablet:py-48 laptop:py-64 laptop:px-48">
        <MainHeaderComponent
          title={"Case Studies"}
          subtitle={
            "Case Studies that I worked on during my free time to show my workflow, design process, and how I solve problems."
          }
          style={"gap-8"}
        />

        <div className="grid grid-cols-1 tablet:grid-cols-2 desktop:grid-cols-3 gap-24 desktop:gap-48">
          {CASE_STUDIES.map((value) => (
            <CardContainerComponent key={value.id} style={"pb-24"}>
              <CaseStudyCardComponent
                id={value.id}
                title={value.title}
                category={value.category}
                link={value.link}
                image={value.image}
                desc={value.desc}
              />
            </CardContainerComponent>
          ))}
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default CaseStudiesPage;

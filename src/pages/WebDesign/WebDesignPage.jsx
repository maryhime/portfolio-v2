import React, { Fragment } from "react";
import { MainHeaderComponent } from "../../components/general/MainHeaderComponent";
import { WebDesignCardComponent } from "../../components/general/WebDesignCardComponent";
import { WEB_DESIGN } from "../../utils/data";
import { CardContainerComponent } from "../../components/general/CardContainerComponent";

const WebDesignPage = () => {
  return (
    <div className="phone-lg:flex-row laptop:gap-48 laptop-lg:gap-64 flex flex-col w-full">
      <div className=" flex flex-col gap-64">
        <MainHeaderComponent
          title={"Web Design & Development"}
          subtitle={
            "Website Pages and applications that I have created during the course of my career and free time."
          }
        />

        <div className="desktop:flex laptop:flex-col laptop:gap-48 hidden">
          {WEB_DESIGN.slice(0, 6).map((value, index) => (
            <CardContainerComponent
              key={index}
              style={"hover:text-primary-500"}
            >
              <WebDesignCardComponent
                title={value.title}
                category={value.desc}
                image={value.image}
                link={value.link}
              />
            </CardContainerComponent>
          ))}
        </div>

        {/* laptop */}
        <div className="laptop:flex laptop:flex-col laptop:gap-48 desktop:hidden hidden">
          {WEB_DESIGN.slice(0, 8).map((value, index) => (
            <CardContainerComponent key={index}>
              <WebDesignCardComponent
                title={value.title}
                category={value.desc}
                image={value.image}
                link={value.link}
              />
            </CardContainerComponent>
          ))}
        </div>

        {/* mobile */}
        <div className="tablet:grid-cols-2 laptop:hidden grid grid-cols-1 gap-24">
          {WEB_DESIGN.map((value, index) => (
            <CardContainerComponent
              key={index}
              style={"hover:text-primary-500"}
            >
              <WebDesignCardComponent
                title={value.title}
                category={value.desc}
                image={value.image}
                link={value.link}
              />
            </CardContainerComponent>
          ))}
        </div>
      </div>

      {/* laptop */}
      <div className=" laptop:flex laptop:flex-col laptop:gap-48 desktop:hidden hidden">
        {WEB_DESIGN.slice(8, 16).map((value, index) => (
          <CardContainerComponent key={index} style={"hover:text-primary-500"}>
            <WebDesignCardComponent
              title={value.title}
              category={value.desc}
              image={value.image}
              link={value.link}
            />
          </CardContainerComponent>
        ))}
      </div>

      {/* desktop */}
      <div className=" desktop:flex desktop:flex-col desktop:gap-48 hidden">
        {WEB_DESIGN.slice(6, 12).map((value, index) => (
          <CardContainerComponent key={index} style={"hover:text-primary-500"}>
            <WebDesignCardComponent
              title={value.title}
              category={value.desc}
              image={value.image}
              link={value.link}
            />
          </CardContainerComponent>
        ))}
      </div>
      <div className=" desktop:flex desktop:flex-col desktop:gap-48 hidden">
        {WEB_DESIGN.slice(12, 16).map((value, index) => (
          <CardContainerComponent key={index} style={"hover:text-primary-500"}>
            <WebDesignCardComponent
              title={value.title}
              category={value.desc}
              image={value.image}
              link={value.link}
            />
          </CardContainerComponent>
        ))}
      </div>
    </div>
  );
};

export default WebDesignPage;

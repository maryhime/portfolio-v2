import { Fragment } from "react";
import { CardContainerComponent } from "./CardContainerComponent";
import { TOOLS } from "@/_mock/tools";

export const ToolsCardComponent = () => {
  return (
    <>
      {TOOLS.map((value, index) => (
        <CardContainerComponent key={index} style={"pb-[24px]  min-h-[350px] justify-center"}>
          <div className="flex flex-col gap-24 pt-24 px-24 desktop:px-64 items-center h-full">
            <h3 className="text-tools-card font-bold desktop:text-title uppercase text-center">
              {value.title}
            </h3>
            <div className={`grid ${value.column} align-center w-fit gap-24`}>
              {value.icons.map((icons, index) => (
                <img
                  className="w-[75px]"
                  key={index}
                  src={`icons/${icons}`}
                  alt=""
                />
              ))}
            </div>
          </div>
        </CardContainerComponent>
      ))}
    </>
  );
};

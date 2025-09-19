import { MainHeaderComponent } from "@/components/shared/MainHeaderComponent";
import { GRAPHIC_DESIGN } from "@/_mock/graphic-design";
import { CardContainerComponent } from "@/components/shared/CardContainerComponent";
import GraphicDesignCard from "@/components/shared/GraphicDesignCard";

const GraphicDesignPage = () => {
  return (
    <div className="flex flex-col phone-lg:flex-row laptop:gap-48 laptop-lg:gap-64 w-full px-24 py-48 tablet:px-48 tablet:py-48 laptop:py-64 laptop:px-48 desktop:gap-[32px]">
      <div className="flex flex-col gap-48 laptop:gap-64 desktop:gap-48 w-full ">
        <MainHeaderComponent
          title={"Graphic Design"}
          subtitle={
            "Graphic Designs that I created as exercise for bootcamps and other things."
          }
          style={"w-full"}
        />
        <div className="desktop:flex laptop:flex-col laptop:gap-48 desktop:gap-[32px] hidden">
          {GRAPHIC_DESIGN.slice(0, 3).map((value, index) => (
            <CardContainerComponent
              key={index}
              style={"hover:text-primary-500 pb-24"}
            >
              <GraphicDesignCard
                title={value.title}
                subtitle={value.subtitle}
                image={value.image}
                desc={value.desc}
              />
            </CardContainerComponent>
          ))}
        </div>
        {/* laptop */}
        <div className="laptop:flex laptop:flex-col laptop:gap-48 hidden desktop:hidden">
          {GRAPHIC_DESIGN.slice(0, 5).map((value, index) => (
            <CardContainerComponent key={index}>
              <GraphicDesignCard
                title={value.title}
                subtitle={value.subtitle}
                image={value.image}
                desc={value.desc}
              />
            </CardContainerComponent>
          ))}
        </div>
        {/* mobile */}
        <div className="grid grid-cols-1 tablet:grid-cols-2 gap-[32px] tablet:gap-24 laptop:hidden">
          {GRAPHIC_DESIGN.map((value, index) => (
            <CardContainerComponent key={index}>
              <GraphicDesignCard
                title={value.title}
                subtitle={value.subtitle}
                image={value.image}
                desc={value.desc}
              />
            </CardContainerComponent>
          ))}
        </div>
      </div>
      {/* laptop */}
      <div className=" hidden laptop:flex laptop:flex-col laptop:gap-48 desktop:hidden w-full " >
        {GRAPHIC_DESIGN.slice(5, 9).map((value, index) => (
          <CardContainerComponent key={index}>
            <GraphicDesignCard
              title={value.title}
              subtitle={value.subtitle}
              image={value.image}
              desc={value.desc}
            />
          </CardContainerComponent>
        ))}
      </div>

      {/* desktop */}
      <div className=" hidden desktop:flex desktop:flex-col desktop:gap-[32px] w-full">
        {GRAPHIC_DESIGN.slice(3, 6).map((value, index) => (
          <CardContainerComponent key={index}>
            <GraphicDesignCard
              title={value.title}
              subtitle={value.subtitle}
              image={value.image}
              desc={value.desc}
            />
          </CardContainerComponent>
        ))}
      </div>
      <div className=" hidden desktop:flex desktop:flex-col desktop:gap-[32px] w-full">
        {GRAPHIC_DESIGN.slice(6, 9).map((value, index) => (
          <CardContainerComponent key={index}>
            <GraphicDesignCard
              title={value.title}
              subtitle={value.subtitle}
              image={value.image}
              desc={value.desc}
            />
          </CardContainerComponent>
        ))}
      </div>
    </div>
  );
};

export default GraphicDesignPage;

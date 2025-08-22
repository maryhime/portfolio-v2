import { MainHeaderComponent } from "../../components/shared/MainHeaderComponent";
import { WebDesignCardComponent } from "../../components/shared/WebDesignCardComponent";
import { WEB_DESIGN } from "../../utils/data";
import { CardContainerComponent } from "../../components/shared/CardContainerComponent";
import { Outlet } from "react-router-dom";

const WebDesignPage = () => {
  return (
    <div className="phone-lg:flex-row laptop:gap-48 laptop-lg:gap-64 flex flex-col w-full px-24 py-48 tablet:px-48 tablet:py-48 laptop:py-64 laptop:px-48 ">
      <div className=" flex flex-col gap-64">
        <MainHeaderComponent
          title={
            <>
              Website and UI <br /> Design Gallery
            </>
          }
          subtitle={
            <>
              Website Pages and applications that I have created <br /> during
              the course of my career and free time.
            </>
          }
        />

        <div className="desktop:flex laptop:flex-col laptop:gap-48 hidden">
          {WEB_DESIGN.slice(0, 6).map((value) => (
            <CardContainerComponent
              key={value.id}
              style={"hover:text-primary-500"}
            >
              <WebDesignCardComponent
                id={value.id}
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
          {WEB_DESIGN.slice(0, 11).map((value) => (
            <CardContainerComponent key={value.id}>
              <WebDesignCardComponent
                id={value.id}
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
          {WEB_DESIGN.map((value) => (
            <CardContainerComponent
              key={value.id}
              style={"hover:text-primary-500"}
            >
              <WebDesignCardComponent
                id={value.id}
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
        {WEB_DESIGN.slice(11, 22).map((value, index) => (
          <CardContainerComponent
            key={value.id}
            style={"hover:text-primary-500"}
          >
            <WebDesignCardComponent
              id={value.id}
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
          <CardContainerComponent
            key={value.id}
            style={"hover:text-primary-500"}
          >
            <WebDesignCardComponent
              id={value.id}
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
          <CardContainerComponent
            key={value.id}
            style={"hover:text-primary-500"}
          >
            <WebDesignCardComponent
              id={value.id}
              title={value.title}
              category={value.desc}
              image={value.image}
              link={value.link}
            />
          </CardContainerComponent>
        ))}
      </div>
      <Outlet />
    </div>
  );
};

export default WebDesignPage;

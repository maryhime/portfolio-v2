import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { ButtonComponent } from "@/components/shared/ButtonComponent";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useHooks } from "./hook";
import { PillsComponent } from "@/components/shared/PillsComponent";
import { scrollToView } from "../../../utils/scrollToView";

export const InnerPagesHeader = ({
  title,
  subtitle,
  hasButton = false,
  link,
  external_link = false,
  backgroundImage,
  designGallery = true,
  color_theme,
  button_style,
  key,
}) => {
  const { handleNavigateBack } = useHooks();

  return (
    <div
      className={`flex sticky top-0 flex-row justify-between gap-48 px-24 py-48 tablet:px-48 tablet:py-48 laptop:py-64 laptop:px-[64px] desktop:py-48  ${backgroundImage}`}
    >
      <div className="flex flex-row gap-24 w-full">
        <div className={designGallery ? "pt-[8px] desktop:pt-16" : "pt-[3px]"}>
          <button
            key={key}
            className={`rounded-[30px] p-[10px] shadow-side-bar w-[44px] h-[44px] flex justify-center items-center  ${
              designGallery ? "bg-primary-100" : "bg-white"
            }`}
            onClick={handleNavigateBack}
          >
            <FontAwesomeIcon
              icon={faArrowLeft}
              style={{ color: `${color_theme}` }}
            />
          </button>
        </div>
        <div className="flex flex-col w-full gap-[12px]">
          {designGallery ? (
            <>
              <h1
                className={
                  designGallery
                    ? "text-title capitalize desktop:text-[56px]   font-extrabold text-primary-900"
                    : "text-title capitalize font-extrabold text-white"
                }
              >
                {title}
              </h1>
              <p
                className={
                  designGallery
                    ? "text-body-text desktop:text-body-desktop"
                    : "text-primary-100 desktop:text-body-desktop"
                }
              >
                {subtitle}
              </p>
            </>
          ) : (
            <>
              <div className="flex flex-col w-full gap-8">
                <h6
                  className={"uppercase font-bold text-[16px]"}
                  style={{ color: `${color_theme}` }}
                >
                  UX Case Study
                </h6>
                <h1
                  className={
                    designGallery
                      ? "text-title  capitalize font-extrabold text-primary-900"
                      : "text-title desktop:text-[56px] capitalize font-extrabold text-white max-w-[80%] desktop:max-w-[70%]"
                  }
                >
                  {title}
                </h1>
              </div>
              <p
                className={
                  designGallery
                    ? "text-body-text desktop:text-body-desktop"
                    : "laptop:text-body-desktop  max-w-[530px] desktop:max-w-none text-[#FCFDFC]"
                }
              >
                {subtitle}
              </p>

              {/* TODO: */}
              <div className="grid grid-flow-col auto-cols-max gap-8 [grid-template-rows:repeat(2,auto)]">
                <PillsComponent
                  title={"Background"}
                  style={`${button_style}]`}
                  onClick={() => scrollToView("project-overview")}
                />
                <PillsComponent
                  title={"Process"}
                  style={`${button_style}]`}
                  onClick={() => scrollToView("process")}
                />
                <PillsComponent
                  title={"Project Background"}
                  style={`${button_style}]`}
                  onClick={() => scrollToView("background")}
                />
                <PillsComponent
                  title={"Research Analysis"}
                  style={`${button_style}]`}
                  onClick={() => scrollToView("research")}
                />
                <PillsComponent
                  title={"User Personas"}
                  style={`${button_style}]`}
                  onClick={() => scrollToView("personas")}
                />
                <PillsComponent
                  title={"Design Direction"}
                  style={`${button_style}]`}
                  onClick={() => scrollToView("direction")}
                />
                <PillsComponent
                  title={"Wireframes"}
                  style={`${button_style}]`}
                  onClick={() => scrollToView("wireframes")}
                />
                <PillsComponent
                  title={"Final Designs"}
                  style={`${button_style}]`}
                  onClick={() => scrollToView("final-designs")}
                />
                <PillsComponent
                  title={"Development"}
                  style={`${button_style}]`}
                  onClick={() => scrollToView("development")}
                />
                <PillsComponent
                  title={"Outcomes and Lessons"}
                  style={`${button_style}]`}
                  onClick={() => scrollToView("outcomes")}
                />
              </div>
            </>
          )}
        </div>
      </div>

      {hasButton ? (
        <div className="w-fit mt-8">
          <ButtonComponent
            title={"Website Link"}
            external_link={external_link}
            link={link}
            style={
              designGallery
                ? "w-full px-[20px] !bg-primary-100 !text-primary-500 hover:!bg-primary-200"
                : `w-full px-[20px] ${button_style}`
            }
            target={"_blank"}
          />
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

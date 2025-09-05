import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { ButtonComponent } from "@/components/shared/ButtonComponent";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useHooks } from "./hook";
import { PillsComponent } from "@/components/shared/PillsComponent";

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
      className={`flex flex-row justify-between gap-48 px-24 py-48 tablet:px-48 tablet:py-48 laptop:py-64 laptop:px-[64px]  ${backgroundImage}`}
    >
      <div className="flex flex-row gap-24 w-full">
        <div className={designGallery ? "pt-[8px]" : "pt-[3px]"}>
          <button
            key={key}
            className={`rounded-[30px] p-[10px] shadow-side-bar w-[44px] h-[44px] flex justify-center items-center ${
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
                    ? "text-title capitalize font-extrabold text-primary-900"
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
                      ? "text-title capitalize font-extrabold text-primary-900"
                      : "text-title capitalize font-extrabold text-white max-w-[80%]"
                  }
                >
                  {title}
                </h1>
              </div>
              <p
                className={
                  designGallery
                    ? "text-body-text desktop:text-body-desktop"
                    : "laptop:text-body-desktop max-w-[530px] text-[#FCFDFC]"
                }
              >
                {subtitle}
              </p>

              {/* <div className="grid">
                <PillsComponent title={'Background'}/>
              </div> */}
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

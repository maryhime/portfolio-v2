import { IconButtonComponent } from "@/components/shared/IconButtonComponent";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { ButtonComponent } from "@/components/shared/ButtonComponent";


export const InnerPagesHeader = ({
  title,
  subtitle,
  hasButton = false,
  link,
  external_link = false,
  backgroundImage,
  designGallery = true,
}) => {
  return (
    <div
      className={`flex flex-row justify-between gap-48 px-24 py-48 tablet:px-48 tablet:py-48 laptop:py-64 laptop:px-48  ${backgroundImage}`}
    >
      <div className="flex flex-row gap-24 w-full">
        <div className={designGallery ? "pt-[8px]" : "pt-[3px]"}>
          <IconButtonComponent
            icon={faArrowLeft}
            link={"#"}
            style={designGallery ? "bg-primary-100 " : "bg-white"}
          />
        </div>
        <div className="flex flex-col w-full gap-[12px]">
          <h1
            className= {
              designGallery
                ? "text-title capitalize font-extrabold text-primary-900"
                : "text-title-phone capitalize font-extrabold text-white"
            }
          >
            {title}
          </h1>
          <p className={
              designGallery
                ? "text-body-text desktop:text-body-desktop"
                : "text-primary-100 desktop:text-body-desktop"
            }>
            {subtitle}
          </p>
        </div>
      </div>

      {hasButton ? (
        <ButtonComponent
          title={"Website Link"}
          external_link={external_link}
          link={link}
          style={designGallery ? 'max-w-[164px] px-[20px] !bg-primary-100 !text-primary-500 hover:!bg-primary-200' : 'max-w-[164px] px-[20px]'}
          target={"_blank"}
        />
      ) : (
        <></>
      )}
    </div>
  );
};

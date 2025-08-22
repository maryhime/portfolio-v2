import { IconButtonComponent } from "./general/IconButtonComponent";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { ButtonComponent } from "./general/ButtonComponent";

export const InnerPagesHeader = ({
  title,
  subtitle,
  hasButton = false,
  link,
  backgroundImage,
}) => {
  return (
    <div
      className={`flex flex-row justify-between gap-48 px-24 py-48 tablet:px-48 tablet:py-48 laptop:py-64 laptop:px-48  ${backgroundImage}`}
    >
      <div className="flex flex-row gap-24 w-full">
        <div className="pt-[3px]">
          <IconButtonComponent icon={faArrowLeft} link={"#"} />
        </div>
        <div className="flex flex-col w-full gap-[12px]">
          <h1 className="text-title-phone capitalize font-extrabold text-white">
            {title}
          </h1>
          <p className="text-primary-100 desktop:text-body-desktop">
            {subtitle}
          </p>
        </div>
      </div>

      {hasButton ? (
        <ButtonComponent
          title={"Website Link"}
          link={link}
          style={"max-w-[164px] px-[20px] "}
          target={"_blank"}
        />
      ) : (
        <div className="text-white">aa</div>
      )}
    </div>
  );
};

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

export const IconButtonComponent = ({
  icon,
  iconSvg,
  style,
  size = "w-[44px] h-[44px]",
  iconSize,
  link,
}) => {
  return (
    <Link
      href={link}
      rel="noreferrer"
      className={` rounded-[30px] p-[10px] shadow-side-bar bg-background-white ${size} flex justify-center items-center ${style}`}
    >
      <FontAwesomeIcon
        icon={icon}
        size={iconSize}
        style={{ color: "#D753BD" }}
      />
      <img src={`/icons/${iconSvg}`} alt="" />
    </Link>
  );
};

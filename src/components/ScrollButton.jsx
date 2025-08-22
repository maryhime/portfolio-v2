import { useEffect, useState } from "react";
import { IconButtonComponent } from "./shared/IconButtonComponent";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";

export const ScrollButton = () => {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 400) {
        setShowTop(true);
      } else {
        setShowTop(false);
      }
    });
  }, []);

  return (
    <IconButtonComponent
      style={"laptop:hidden sticky top-[90%] left-full shadow-lg "}
      icon={showTop ? faChevronUp : faChevronDown}
      size="w-[55px] h-[55px]"
      iconSize={"lg"}
    />
  );
};

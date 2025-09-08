import { useEffect, useState } from "react";
import { IconButtonComponent } from "@/components/shared/IconButtonComponent";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";

export const ScrollButton = () => {
  const [showTop, setShowTop] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToBottom = () => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
  };

  // Detect scroll position
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const pageHeight = document.body.scrollHeight - window.innerHeight;

      // If user scrolled down more than 100px, show "up" button
      if (scrollY > 100 && scrollY < pageHeight - 100) {
        setShowTop(true);
      } else {
        setShowTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <IconButtonComponent
      style="laptop:hidden sticky top-[90%] left-full shadow-lg"
      icon={showTop ? faChevronUp : faChevronDown}
      size="w-[55px] h-[55px]"
      iconSize="lg"
      onClick={showTop ? scrollToTop : scrollToBottom}
    />
  );
};

import { Route, Routes } from "react-router-dom";
import { PAGES } from "@/routes";
import { PageNotFound } from "@/components/PageNotFound";
import { ScrollButton } from "@/components/ScrollButton";

export const RightLayout = () => {
  return (
    <div className=" flex flex-col background-gradient w-full laptop:w-[75%]  laptop-lg:w-[80%] desktop:[w-50%] font-inter laptop:overflow-auto scroll-smooth pointer-events-auto  border-l-[1px] border-[#F8D7F0]">
      <ScrollButton />
      <Routes>
        <Route path="*" element={<PageNotFound />} />
        {PAGES.map((element, index) => (
          <Route path={element.path} element={element.component} key={index} />
        ))}
      </Routes>
    </div>
  );
};

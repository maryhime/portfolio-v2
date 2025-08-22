import { MainHeaderComponent } from "../../components/shared/MainHeaderComponent";
import { ToolsCardComponent } from "../../components/shared/ToolsCardComponent";

const ToolsPage = () => {
  return (
    <div className="flex flex-col gap-24 laptop:gap-48 laptop-lg:gap-64 desktop:gap-64 w-full px-24 py-48 tablet:px-48 tablet:py-48 laptop:py-64 laptop:px-48 ">
      <MainHeaderComponent
        title={"Tools"}
        subtitle={
          "Tools that I use to create designs, develop websites, and keep track of my studies and notes. "
        }
        style={"laptop:w-[50%]"}
      />
      <div className="grid grid-cols-1 tablet:grid-cols-2 gap-24">
        <ToolsCardComponent />
      </div>
    </div>
  );
};

export default ToolsPage;

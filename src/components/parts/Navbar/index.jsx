import { NavLink } from "react-router-dom";
import { downloadResume } from "@/utils/download";
import { useHooks } from "./hook";

export const Navbar = ({ close }) => {
  const { navStyles, navPages } = useHooks();

  return (
    <div className="grid grid-cols-2 gap-8">
      {navPages.map((nav) => (
        <NavLink
          to={nav.path}
          key={nav.id}
          style={navStyles}
          onClick={close}
          className={
            "p-8 flex gap-[10px] rounded-[99px] h-button text-button uppercase w-full justify-center items-center "
          }
        >
          {nav.name}
        </NavLink>
      ))}
      <button
        onClick={downloadResume}
        className={
          "p-8 flex gap-[10px] rounded-[99px] h-button text-button uppercase w-full justify-center items-center border-solid border-[1px] border-primary-300 text-primary-500 hover:bg-primary-200 hover:text-primary-500"
        }
      >
        Resume
      </button>
    </div>
  );
};

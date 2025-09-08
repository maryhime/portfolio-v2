import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { USER_INFO } from "@/_mock/user-info";
import { Profile } from "@/components/parts/Profile";
import { Navbar } from "@/components/parts/Navbar";
import { Socials } from "@/components/parts/Socials";

export const MobileMenu = ({ close }) => {
  return (
    <div className="fixed z-50 top-0 left-0 bg-white h-screen w-screen flex flex-col p-24 gap-48">
      <div className="flex justify-end">
        <FontAwesomeIcon
          onClick={close}
          icon={faClose}
          size="xl"
          style={{ color: "#591863" }}
        />
      </div>

      <div className="flex justify-center">
        {USER_INFO.map((value, index) => (
          <div
            key={index}
            className="flex flex-col gap-24 justify-center px-16 phone-lg:max-w-[55%] tablet:max-w-[40%]"
          >
            <Profile name={value.name} avatar={value.avatar} />
            <Navbar close={close} />
            <Socials contacts={value.contacts} />
          </div>
        ))}
      </div>
    </div>
  );
};

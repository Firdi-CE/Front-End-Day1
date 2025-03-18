import React from "react";
import { HomeIcon } from "@heroicons/react/24/outline";
import { PhoneIcon } from "@heroicons/react/24/outline";
import { UserCircleIcon } from "@heroicons/react/24/outline";

const navData = [
  {
    route: "/home",
    label: "Home",
    icon: <HomeIcon className="w-5 h-5 m-auto" />,
  },
  {
    route: "/about",
    label: "About",
    icon: <UserCircleIcon className="w-5 h-5 m-auto" />,
  },
  {
    route: "/contact",
    label: "Contact",
    icon: <PhoneIcon className="w-5 h-5 m-auto  " />,
  },
];

const Header: React.FC = () => {
  return (
    <div>
      <div className="flex flex-row justify-between p-2 md:p-5 border-b-2 w-screen md:w-screen">
        <div className="flex mr-2 group text-md">
          <div className="flex group-hover:hidden">
            <h1 className="font-bold border border-black rounded-l-sm p-2">
              Alam
            </h1>
            <h1 className="font-bold text-white border border-black rounded-r-sm bg-black p-2 font-serif">
              Firdaus
            </h1>
          </div>
          <div className="hidden group-hover:flex">
            <h1 className="font-bold border border-black rounded-l-sm p-2 text-white bg-black">
              Alam
            </h1>
            <h1 className="font-bold text-black border border-black rounded-r-sm bg-white p-2 font-serif">
              Firdaus
            </h1>
          </div>
        </div>

        <nav className="flex flex-row gap-2 md:gap-12">
          {navData.map((item) => (
            <a
              className="hover:text-blue-500 underline-offset-4 hover:underline font-medium my-auto px-1 md:px-4 text-md md:text-lg transition-color duration-300 delay-100"
              key={item.route}
              href={item.route}
            >
              <div className="flex flex-row m-auto gap-0.5">
                {item.icon}
                <p className="hidden md:flex">{item.label}</p>
              </div>
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default Header;

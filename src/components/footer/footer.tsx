import React from "react";
import { CameraIcon } from "@heroicons/react/24/outline";
import { EnvelopeIcon } from "@heroicons/react/24/outline";

const Footer: React.FC = () => {
  return (
    <div className="flex flex-row bg-gray-800 min-h-[200px] text-white justify-between py-3 px-10 mt-2">
      <div className="flex flex-col justify-between">
        <div className="mt-2">
          <h1 className="text-white text-2xl font-normal font-italiana">
            Ferdi/Firdi/Fredi
          </h1>
          <p className="font-light hidden md:flex">
            Front end doesn't vibe with me chief fr fr
            <br />
            Have a good day and good luck.
          </p>
        </div>

        <p className="font-light md:font-normal text-sm">mmmmm flavor text</p>
      </div>

      <div className="flex flex-row my-auto text-sm md:text-lg font-light h-18">
        <ul className="flex flex-col justify-center md:justify-between h-full mr-1">
          <li>
            <CameraIcon className="w-5 h-5 stroke-1 m-0 md:my-1" />
          </li>
          <li>
            <EnvelopeIcon className="w-5 h-5 stroke-1 m-0 md:my-1" />
          </li>
        </ul>
        <ul className="hidden md:flex flex-col h-full justify-between mr-3">
          <li>
            <h3 className=""> Instagram </h3>
          </li>
          <li>
            <h3 className="">E-mail </h3>
          </li>
        </ul>
        <ul className="flex flex-col h-full justify-center md:justify-between">
          <li>: its_firdi </li>
          <li className="truncate">: alamfirdaus0401@gmail.com </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;

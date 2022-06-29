import React, { useState } from "react";
import logo from "../assets/img/logo.png";
import control from "../assets/img/control.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faGauge } from "@fortawesome/free-solid-svg-icons";

const Dashboart = () => {
  const [open, setOpen] = useState(true);
  const menu = [{ title: "Dashboard", icon: faGauge, gap: false }];

  return (
    <div className="flex">
      <div
        className={`bg-slate-400 shadow-sm h-10 fixed top-0 ${
          open ? "left-10" : "left-5 "
        } duration-500 right-0`}
      >
        Contenido de la headerbar
      </div>
      <div
        className={` ${
          open ? "w-px-200" : "w-px-100"
        } bg-dark-purple shadow-sm h-screen p-5  pt-8 relative duration-200`}
      >
        <img
          src={control}
          className={`absolute cursor-pointer -right-4 top-9 w-9 border-dark-purple
        border-2 rounded-full bg-white  ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)}
        />

        <div className="cursor-pointer gap-x-4 flex items-center">
          <img
            src={logo}
            className={`duration-500 ${open && "rotate-[360deg]"} img-logo`}
          />
          <h1
            className={`text-white font-medium text-xl duration-200 ${
              !open && "scale-0"
            }`}
          >
            generic-app
          </h1>
        </div>
        <ul className="pt-6">
          {menu.map((menu, index) => (
            <li
              key={index}
              className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
              ${menu.gap ? "mt-9" : "mt-2"} ${
                index === 0 && "bg-light-white"
              } `}
            >
              <FontAwesomeIcon className="px-1" icon={menu.icon} />
              <span className={`${!open && "hidden"} origin-left duration-200`}>
                {menu.title}
              </span>
            </li>
          ))}
        </ul>
      </div>
      <div className="h-screen p-7 m-1">
        <h1 className="text-2xl font-semibold ">Home Page</h1>
      </div>
    </div>
  );
};
export default Dashboart;

import React, { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faUser } from "@fortawesome/free-solid-svg-icons";

import "../styles/Practice.css";

const Header = () => {
  const [hideSidebar, setHideSidebar] = useState(false);

  return (
    <div className="grow flex flex-col h-screen bg-white w-full">
      <div className="flex justify-between items-center p-2 bg-slate-300 h-[70px] shadow-lg">
        <FontAwesomeIcon
          icon={faBars}
          className="icon cursor-pointer mx-2 md:invisible"
          onClick={() => {
            setHideSidebar(!hideSidebar);
          }}
        />
        <div className="flex justify-center items-center">
          <div className="flex flex-col items-end justify-center whitespace-nowrap">
            <div className="m-0 text-left font-semibold">generic-user</div>
            <div className="mt-[-5px] text-sm text-left">user-rol</div>
          </div>
          <div className="w-[32px] h-[32px] mx-2 rounded-full border overflow-hidden flex justify-center items-center">
            <FontAwesomeIcon
              icon={faUser}
              className={`w-[24px] h-[24px] text-slate-500`}
            />
          </div>
        </div>
      </div>
      <div className="overflow-x-hidden overflow-y-auto"></div>
    </div>
  );
};

export default Header;

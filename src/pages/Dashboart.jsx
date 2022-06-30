import React, { useState } from "react";
import logo from "../assets/img/logo.png";
import control from "../assets/img/control.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faGauge } from "@fortawesome/free-solid-svg-icons";

const Dashboart = () => {
  const [open, setOpen] = useState(true);
  const menu = [{ title: "Dashboard", icon: faGauge, gap: false }];

  return (
    <>
    <div>Este es el Dashboart</div>
    </>
  );
};
export default Dashboart;

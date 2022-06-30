import { useState } from "react";

const SidebarTitle = (props) => {
  const [open, setOpen] = useState(true);
  return (
    <li
      className={`${
        !open && `m-[-20px] opacity-0 scale-0`
      } font-bold uppercase text-xs pb-2 duration-500`}
    >
      {props.data.title}
    </li>
  );
};

export default SidebarTitle;

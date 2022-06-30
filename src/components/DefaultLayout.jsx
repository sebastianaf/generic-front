import React from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";

const DefaultLayout = ({ children }) => {
  return (
    <>
      <div class="flex flex-row">
        <Sidebar />
        <div className="grow flex flex-col h-screen bg-white w-full">
          <Header />
          <div className="overflow-x-hidden overflow-y-auto p-4">{children}</div>
        </div>
      </div>
    </>
  );
};

export default DefaultLayout;

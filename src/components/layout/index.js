import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./sidebar";
import hamburger from "../../assets/icons/hamburger_icon.svg";
import LogoMark from "../../assets/icons/logomark.svg";
import Text from "../Typography/Typography";
import SidebarModal from "../SidebarMobile";

export default function AppLayout() {
  const [showSidebarModal, setShowSidebarModal] = useState(false);
  return (
    <>
      <SidebarModal closeModal={() => setShowSidebarModal(false)} isOpen={showSidebarModal}>
        <Sidebar />
      </SidebarModal>
      <div className="w-full h-full flex">
        <div className="lg:w-[20%] lg:block fixed hidden">
          <Sidebar />
        </div>
        <div className="lg:ml-[20%] w-full lg:w-[80%] p-[2%] bg-[#F9FAFB] min-h-screen">
          <div className="lg:hidden flex justify-between items-center">
            <div className="flex gap-2 items-center mb-2">
              <img src={LogoMark} alt="logo" />
              <Text variant="h4">Untitled UI</Text>
            </div>
            <img
              src={hamburger}
              alt="hamburger"
              className="cursor-pointer"
              onClick={() => setShowSidebarModal(!showSidebarModal)}
            />
          </div>
          <Outlet />
        </div>
      </div>
    </>
  );
}

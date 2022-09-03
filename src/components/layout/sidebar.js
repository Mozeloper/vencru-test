import React from "react";
import { NavLink } from "react-router-dom";
import Text from "../../components/Typography/Typography";
import SearchBar from "../searchBar";
import LogoMark from "../../assets/icons/logomark.svg";
import Home from "../../assets/icons/home_icon.svg";
import Dashboard from "../../assets/icons/dashboard_icon.svg";
import Project from "../../assets/icons/projects_icon.svg";
import Task from "../../assets/icons/task_icon.svg";
import Reporting from "../../assets/icons/reporting_icon.svg";
import Users from "../../assets/icons/users_icon.svg";
import Support from "../../assets/icons/support_icon.svg";
import Settings from "../../assets/icons/settings_icon.svg";
import Logout from "../../assets/icons/logout.svg";
import Lady from "../../assets/images/sidebarLady.svg";
import Olivia from "../../assets/images/olivia.svg";

export default function Sidebar() {
  const SideBarList = [
    {
      title: "Home",
      img: Home,
      path: "/",
    },
    {
      title: "Dashboard",
      img: Dashboard,
      number: 10,
      path: "/",
    },
    {
      title: "Projects",
      img: Project,
      path: "/",
    },
    {
      title: "Tasks",
      img: Task,
      path: "/",
    },
    {
      title: "Reporting",
      img: Reporting,
      path: "/",
    },
    {
      title: "Users",
      img: Users,
      path: "/",
    },
    {
      title: "Support",
      img: Support,
      path: "/",
    },
    {
      title: "Settings",
      img: Settings,
      path: "/settings",
    },
  ];

  return (
    <div className="w-full overflow-y-auto overflow-hidden no-scrollbar h-screen p-[10%] bg-BACKGROUND_WHITE">
      <div className="flex gap-2 items-center mb-4">
        <img src={LogoMark} alt="logo" />
        <Text variant="h3">Untitled UI</Text>
      </div>
      <SearchBar placeholder="Search" />
      <div className="mt-3 w-full">
        {SideBarList.map((list, index) => {
          return (
            <NavLink
              key={index}
              to={list.path}
              className={({ isActive }) => (isActive ? "bg-gray" : "hover:bg-gray")}
              style={{
                width: "100%",
                padding: "10px",
                marginTop: "3px",
                borderRadius: "8px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: ".5rem",
              }}
            >
              <div className="flex gap-10">
                <img src={list.img} alt="icons" />
                <Text variant="body">{list.title}</Text>
              </div>
              {list?.number && (
                <div className="bg-[#F9FAFB] rounded-full w-[30px] h-[30px] flex justify-center items-center">
                  <Text variant="body">{list?.number}</Text>
                </div>
              )}
            </NavLink>
          );
        })}
      </div>
      <div className="mt-4 bg-gray rounded-lg p-[4%] flex flex-col gap-1 w-full">
        <Text variant="h4">New features available!</Text>
        <Text variant="small" weight="normal" color="text-secondary">
          Check out the new dashboard view. Pages now load faster
        </Text>
        <img src={Lady} alt="img" loading="lazy" className="rounded-lg" />
        <div className="flex gap-3">
          <Text variant="small">Dismiss</Text>
          <Text variant="small" color="text-tertiary" weight="normal">
            What’s new?
          </Text>
        </div>
      </div>
      <div className="border-b border-[#EAECF0] w-full my-6"></div>
      <div className="flex justify-between mb-16">
        <img src={Olivia} alt="img" loading="lazy" className="rounded-full" />
        <div className="flex flex-col gap1">
          <Text variant="small">Olivia Rhye</Text>
          <Text variant="small" color="text-secondary" weight="normal">
            olivia@untitledui.com
          </Text>
        </div>
        <img src={Logout} alt="img" loading="lazy" className="rounded-full cursor-pointer" />
      </div>
    </div>
  );
}

import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/images/logo.svg";
import { PiStudent } from "react-icons/pi";
import { LuLayoutDashboard } from "react-icons/lu";
import { MdOutlinePieChartOutline } from "react-icons/md";
import { HiOutlineUserGroup } from "react-icons/hi";
import { BsArrowLeftCircle } from "react-icons/bs";

const SideBar = () => {
  const [customLinks, setCustomLinks] = useState([
    { icon: <LuLayoutDashboard />, text: "الصفحه الرئيسيه", path: "/" },
    { icon: <HiOutlineUserGroup />, text: "المدرسين", path: "/teachers" },
    { icon: <PiStudent />, text: "الطلاب", path: "/students" },
    { icon: <MdOutlinePieChartOutline />, text: "التقرير", path: "/report" },
  ]);
  const PathName = useLocation();

  return (
    <section className="bg-primaryColor text-white  shadow py-12 h-screen flex flex-col justify-between items-end fixed top-0 bottom-0 right-0">
      <div>
        {/* logo of website */}
        <div className="px-20">
          <img src={logo} alt="logo" />
        </div>
        {/* nav bar */}
        <ul className="flex flex-col gap-10 w-full mt-16 ">
          {customLinks.map((link) => (
            <Link key={link.text} to={link.path}>
              <li className={`flex gap-[12px] items-center text-[24px] px-10 ${PathName.pathname === link.path ? "bg-white py-6 text-primaryColor" : null}`}>
                {link.icon}
                <span className="h-[17px] text-2xl leading-[22px]">
                  {link.text}
                </span>
              </li>
            </Link>
          ))}
        </ul>
      </div>

      <div className="mx-auto h-[22px]">
        <Link to={"/"} className="flex items-center">

          <span className="text-[22px] h-4 inline-block pl-[10px] pb-10">
            خروج
          </span>
          <span className="ml-2">
            <BsArrowLeftCircle />
          </span>
        </Link>
      </div>
    </section>
  );
};

export default SideBar;

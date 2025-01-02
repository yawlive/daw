
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { RiMenuFill } from "react-icons/ri";
import ToolTip from './ToolTip';

const Sidebar = ({ Menus, sidebarcolor, textcolor, iconscolor, onToggle }) => {
  const [open, setOpen] = useState(false);

  const handleToggle = () => {
    setOpen(!open);
    if (onToggle) {
      onToggle(!open);
    }
  };

  // Close sidebar on larger screens
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && open) {
        setOpen(false);
        onToggle(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [open, onToggle]);

  return (
    <div className={`${open ? 'w-60' : 'w-20'} ${sidebarcolor} h-screen p-5 pt-8 relative shadow-2xl border-r duration-300 `}>
      <RiMenuFill
        className="absolute cursor-pointer text-white z-50 right-6 top-5 w-7 h-11 rounded-full"
       
        onClick={handleToggle}
      />

      <div className="flex gap-x-4 items-center">
        <h1
          className={`origin-left text-3xl font-extrabold duration-200 ${!open && "scale-0"}`}
          style={{ color: textcolor }}
        >
          Edulink
        </h1>
      </div>

      <ul className="pt-6">
        {Menus.map((Menu, index) => (
          <li
            key={index}
            className={`flex items-center gap-x-4 rounded-md p-2 cursor-pointer hover:bg-opacity-75 ${
              Menu.gap ? "mt-9" : "mt-2"
            }`}
            style={{ color: textcolor }}
          >
            <Link to={Menu.link} className="flex items-center gap-x-4">
              <span className="text-2xl" style={{ color: iconscolor }}>
                <ToolTip color='rgba(255,255,255,0.17)' text={Menu.title}>
                  {Menu.icon}
                </ToolTip>
              </span>
              <span className={`${!open && "hidden"} origin-left duration-200`}>
                {Menu.title}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;

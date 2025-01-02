import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import StudentNavBar from '../components/StudentNavBar';
import Sidebar from '../components/Sidebar';
import { studentSidebarConfig } from '../data.js';

const StudentLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleSidebarToggle = (isOpen) => {
    setIsSidebarOpen(isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : 'auto';
  };

  return (
    <div className="relative flex h-screen">
      {/* Sidebar */}
      <Sidebar
        Menus={studentSidebarConfig.Menus}
        sidebarcolor={studentSidebarConfig.sidebarcolor}
        textcolor={studentSidebarConfig.textcolor}
        iconscolor={studentSidebarConfig.iconscolor}
        onToggle={handleSidebarToggle} 
      />

      {/* Main content area */}
      <div
        className={` pt-20 flex-1 overflow-auto relative transition-all duration-300 ${
          isSidebarOpen ? 'z-10' : ''
        }`} // Ensure content moves behind the overlay when sidebar is open
      >
        <StudentNavBar />
        <Outlet />
      </div>

      {/* Overlay for small screens when sidebar is open */}
      <div
        className={`fixed inset-0 bg-black/50  transition-all duration-300 md:hidden ${
          isSidebarOpen ? 'opacity-100 z-20' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => handleSidebarToggle(false)} // Close sidebar when clicked
      />
    </div>
  );
};

export default StudentLayout;

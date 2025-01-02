import React from 'react'
import Sidebar from '../components/Sidebar'
import { teacherSidebarConfig } from '../data'
import StudentNavBar from '../components/StudentNavBar'
import { Outlet } from 'react-router-dom';
const TeacherLayout = () => {
  return (

<div className=" relative flex h-screen">
    
      <Sidebar
        Menus={teacherSidebarConfig.Menus}
        sidebarcolor={teacherSidebarConfig.sidebarcolor}
        textcolor={teacherSidebarConfig.textcolor}
        iconscolor={teacherSidebarConfig.iconscolor}
      />

      <div className="pt-20 flex-1 overflow-auto relative z-10">
        <StudentNavBar />
        <Outlet />
       
      </div>
      
    </div>
  )
}

export default TeacherLayout
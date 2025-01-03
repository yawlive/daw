import React from 'react';
import { MdOutlineCancel } from 'react-icons/md';
// import { user, userstudent } from '../data.js';
import {useState } from 'react';
import { Link , useLocation } from 'react-router-dom';

const ProfileHead = () => {

   //  data
   const userstudent = {
    student_id: "78456468762",
    profile_picture: "/rahma.jpg",
    full_name: "Rahma Zendaoui",
    phone: "07749387454",
    grade: "L3 TI",
    email: "rahma@gmail.com",
    skills: ["css", "js", "flutter"],
    created_at: "12/2/2024",
    isActive: true,
  };

  
         const [isClicked, setIsClicked] = useState(true);
         const location = useLocation();
         const pathname = location.pathname;
         const userType = pathname.includes('teacher') ? 'teacher' : 'student';
       

         const handleClick = () => {
           setIsClicked(false); 
         };
         const profileData = userType === 'teacher' ? user : userstudent;
  return (
    <> 
    {isClicked && (
    <div className="nav-item absolute right-1 top-16 bg-white border-collapse shadow-md p-8 rounded-lg w-96">
        <Link to={`/${userType}/profile`}  onClick={handleClick} >
        <div>
      <div className="flex justify-between items-center">
        <p className="font-semibold text-lg dark:text-gray-200">User Profile</p>
         <MdOutlineCancel
                       className="text-gray-500 hover:text-gray-700 cursor-pointer text-2xl"
                       onClick={handleClick} 
         />
      </div>
      <div className="flex gap-5 items-center mt-6">
        <img
          className="rounded-full h-24 w-24"
          src={profileData.profile_picture}
          alt="user-profile"
        />
        <div>
          <p className="font-semibold text-xl dark:text-gray-200">{profileData.full_name}</p>
          <p className="text-gray-500 text-sm dark:text-gray-400">{userType}</p>
          <p className="text-gray-500 text-sm font-semibold dark:text-gray-400"> #{profileData.id} </p>
        </div>
      </div>
      </div>
      </Link>
      <div className="bg-slate-300 rounded-md m-2 text-dark-purple font-sans text-center mt-5 hover:bg-dark-purple hover:text-slate-200
      ">
        <Link
          to="/">
       <button>  
          <p className='justify-self-center '> Log out</p>
              </button>
              </Link>
      </div>
    </div>
    
    )}</>
  );
};

export default ProfileHead;

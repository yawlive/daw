import React, { useState } from 'react';
import { Link , useLocation } from 'react-router-dom';
import Notification from './Notification';
import msg from '../assets/images/messages.png';
import profile from '../assets/images/profile.png';
import notification from '../assets/images/notification.png';
import ProfileHead from './profilehead';


const NavBar = () => {
  const location= useLocation();
  const pathname = location.pathname;
         const userType = pathname.includes('teacher') ? 'teacher' : 'student';
  const [isClicked, setIsClicked] = useState({
    notification: false,
    ProfileHead: false,
  });

  const handleClick = (type) => {
    setIsClicked((prevState) => ({
      ...prevState,
      [type]: !prevState[type],
    }));
  };

  return (
    <nav className="bg-dark-purple border-b border-sky-950 w-full top-0 left-0 z-10 fixed">
      <div className="mr-6 ml-1">
        
        <div className="flex h-20 items-center justify-between">
        <h1
          className={`ml-14 text-3xl font-extrabold duration-200 text-white `}
          
        >
          Edulink
        </h1>
      
          <div className="md:ml-auto">
            <div className="flex space-x-2">
              <Link
                to={`/${userType}`}
                className="h-10 mt-2 mb-2 text-black bg-white hover:bg-slate-700 hover:text-white rounded-md px-3 py-2"
              >
                Home
              </Link>
              <Link to={`/${userType}/chat`} >
              <button
                type="button"
                className="rounded-md mt-3 mb-2 px-3 py-2"
                aria-label="Messages"
              >
                <img className="h-5 w-auto" src={msg} alt="Messages" />
              </button>
              </Link>
              <div className="relative">
                <button
                  type="button"
                  className="rounded-md mt-2 mb-2 px-3 py-2"
                  aria-label="Notifications"
                  onClick={() => handleClick('notification')}
                >
                  <img className="h-7 w-auto" src={notification} alt="Notifications" />
                </button>
                {isClicked.notification && (
                  <div className="absolute top-10 right-0">
                    <Notification />
                  </div>
                )}
              </div>
              
              <button
                type="button"
                className="rounded-md mt-2 mb-2 px-3 py-2"
                aria-label="Profile"
                onClick={() => handleClick('ProfileHead')}
              > 
                <img className="h-7 w-auto" src={profile} alt="Profile" />
              </button>
              {isClicked.ProfileHead && (
                  <div className="absolute top-10 right-0">
                    <ProfileHead/>
                  </div>
                )}
              
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

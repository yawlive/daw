import React, { useState, useEffect } from 'react';
import { BiSearch, BiUserCircle } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom'; // For navigation

const ContentHeader = () => {
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(window.innerWidth > 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth > 768);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="content--header">
       <h1 className="header--title">Home</h1>
       <div className="header--activity">
        <div className="search-box">
          <input type="text" placeholder="Search here ..." />
          <BiSearch className="icon" />
        </div>
      </div>
      {isMobile ? (
        <div
          className="mobile-profile-icon"
          onClick={() => navigate('/profile-details')}
        >
        
        </div>
      ):( <BiUserCircle className="profile-icon" />) }
 
    </div>
  );
};

export default ContentHeader;

import React, { useState } from 'react';
import { MdOutlineCancel } from 'react-icons/md';
import { chatData } from '../data';

const Notification = () => {
  
  
  const [isClicked, setIsClicked] = useState(true);

  const handleClick = () => {
    setIsClicked(false); 
  };

  return (
    <>
      {isClicked && (
        <div className="nav-item absolute shadow-xl  right-5 md:right-0 top-10 bg-white dark:bg-[#42464D] p-8 rounded-lg w-96 max-h-96 overflow-y-auto">
          <div className="flex justify-between items-center">
            <div className="flex gap-3">
              <p className="font-semibold text-lg dark:text-gray-200">Notifications</p>
              <button
                type="button"
                className="text-white text-xs rounded p-1 px-2 bg-orange-theme"
              >
                5 New
              </button>
            </div>
            <MdOutlineCancel
              className="text-gray-500 hover:text-gray-700 cursor-pointer text-2xl"
              onClick={handleClick} 
            />
          </div>
          <div className="mt-5">
            {chatData?.map((item, index) => (
              <div
                key={index}
                className="flex items-center leading-8 gap-5 border-b border-gray-200 dark:border-gray-600 p-3"
              > <img className="rounded-full h-12 w-12" src={item.image} alt={item.message} />
                <div>
                  <p className="font-semibold dark:text-gray-200">{item.message}</p>
                  <p className="text-gray-500 text-sm dark:text-gray-400">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Notification;

import React, { useState } from 'react';
import { requests, themes } from '../../data';

const Trequest = () => {
  const [selectedTheme, setSelectedTheme] = useState('');

  const handleFilterChange = (e) => {
    setSelectedTheme(e.target.value);
  };

  const filteredRequests = selectedTheme
    ? requests.filter((request) => request.themeName === selectedTheme)
    : requests;

  return (
    <div className="p-6 bg-slate-100 min-h-screen font-sans">
      <div className="p-10 bg-white rounded-3xl">
        {/* Header Component */}
        <div className="flex justify-between items-center border-b pb-4 mb-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-700">Requests</h1>
            <p className="text-gray-600 ">All</p>
          </div>
          {/* Filter Dropdown */}
          <select
              value={selectedTheme}
              onChange={handleFilterChange}
              className={`text-indigo-950 text-sm font-thin border-2 px-4 py-2 rounded-lg shadow-md focus:outline-none 
            'border-slate-100  bg-white transition-all `}
               >
                 <option value="">All Themes</option>
                 {themes.map((theme, idx) => (
                  <option key={idx} value={theme.name}
                   className={'bg-slate-100 rounded-lg text-indigo-950  hover:bg-slate-300'}>
                  {theme.name}
                  </option>
                    ))}
                 </select>
        </div>

        {/* Filtered Requests Display */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {filteredRequests.length === 0 ? (
            <p>No requests found for this theme.</p>
          ) : (
            filteredRequests.map((request, index) => (
              <div key={index} className="bg-white shadow-md rounded-lg p-4">
                <h3 className="text-lg font-semibold mb-4">{request.themeName}</h3>
                <ul className="space-y-4">
                  <li className="p-4 bg-gray-50 rounded-md shadow-sm">
                    <p className="text-base font-semibold">{request.teamName}</p>
                    <p className="text-xs m-1 text-gray-600">Applied at: {request.requestDate}</p>
                    <p className="text-xs m-1 text-gray-600">
                      Average grade: {request.students.reduce((sum, item) => sum + item.grade, 0) / request.students.length}
                    </p>
                    <div className="flex gap-4 flex-col items-left m-2 ">
                      {request.students.map((student, idx) => (
                        <div key={idx} className="flex flex-row items-left gap-2">
                          <img src={student.image} alt="Student" className="rounded-full w-10 h-10 object-cover" />
                          <div className="flex flex-col">
                            <span className="text-sm">{student.name}</span>
                            <p className="text-xs">Grade: {student.grade}</p>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="flex justify-between">
                      <button className="bg-green-200 text-green-800 py-2 px-4 rounded-md hover:bg-green-600">
                        Accept
                      </button>
                      <button className="bg-red-200 text-red-800 py-2 px-4 rounded-md hover:bg-red-600">
                        Reject
                      </button>
                    </div>
                  </li>
                </ul>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Trequest;

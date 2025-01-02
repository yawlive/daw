import React, { useState } from "react";
import  {Link}  from 'react-router-dom';
import { CiSearch } from 'react-icons/ci';
const DataGrid = ({ data, columns, title, category ,entityType}) => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredData = data.filter((item) => {
    return columns.some((col) => {
      const fieldValue = item[col.field]
        ? item[col.field].toString().toLowerCase()
        : "";
      return fieldValue.includes(searchQuery.toLowerCase());
    });
  });

  return (
    <div className="p-10 bg-white rounded-3xl">
      {/* Header Component */}
      <div className="flex flex-col lg:flex-row lg:justify-between border-b pb-4 mb-6">
        <div>
          <p className="text-gray-600 sm:text-sm">{category}</p>
          <h1 className="lg:text-3xl text-3xl font-bold text-gray-700">
            {title}
          </h1>
        </div>
        <div className="mt-4 mb-2 flex ml-auto lg:justify-end items-center border-dark-purple rounded-lg px-1 py-1 shadow-md color w-48 h-10 sm:w-48 lg:w-64">
          <input
            type="text"
            placeholder="Search here .."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="text-dark-purple rounded-lg px-3 py-2 w-full focus:outline-none focus:border-transparent"
          />
          <CiSearch className="text-dark-purple border-transparent w-7 h-7" />
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-transparent">
          <thead>
            <tr className="bg-transparent">
              
              {columns.map((col, index) => (
                <th
                  key={index}
                  className="border border-transparent px-4 py-2 text-left text-xs font-semibold text-gray-900"
                  style={{ width: col.width }}
                >
                  {col.headerText}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filteredData.map((item, index) => (
              <tr key={index} className={"bg-white"}>
                 <Link
                  to={{
                    pathname: `/${entityType}/${item.teacher_id}`,}}
                    state= {{ teacherData: item }}
                  
                  className="contents"
                >
                {columns.map((col, index) => (
                  <td
                    key={index}
                    className="border border-transparent px-4 py-2 overflow-hidden"
                  >
                    {col.sum
                      ? col.sum(item) 
                      : col.field === "profile_picture"|| col.field === "photo" ? (
                        <div className="w-12 h-12 overflow-hidden rounded-full">
                          <img
                            src={item[col.field]}
                            className="w-full h-full object-cover"
                            alt="profile"
                          />
                        </div>
                      ) : (
                        item[col.field]
                      )}
                  </td>
                ))}
                </Link>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DataGrid;

import React from 'react';
import DataGrid from '../../components/DataGrid';
import { studentsData, studentsGrid } from '../../data.js';

const Studentslist = () => {
  return (
    <div className='p-6 bg-slate-100 min-h-screen font-sanssrc\pages\Teacherpage.jsxsrc\pages\Teacherpage.jsx'>
    <DataGrid 
      data={studentsData}
      columns={studentsGrid}
      title="Students"
      category="Information"
    />
    </div>
  );
};

export default Studentslist;

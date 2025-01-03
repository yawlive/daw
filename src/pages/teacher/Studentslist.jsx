import React from 'react';
import DataGrid from '../../components/DataGrid';
import {studentsGrid } from '../../data.js';
import api from './api';

const Studentslist = () => {
   const studentsData = [
    { photo:'/rahma.jpg', name: 'Alice Johnson', studentId:'29349835' ,level:'STIC' , grade: 'A', email: 'alice@example.com' ,status:'Supervised'},
    { photo:'/jiwoong.jpg', name: 'Alice Johnson',  studentId:'29349835' ,level:'RSD' , grade: 'A', email: 'alice@example.com',status:'Supervised' },
    { photo:'/jiwoong.jpg', name: 'Alice Johnson',  studentId:'29349835' ,level:'sdia' , grade: 'A', email: 'alice@example.com' ,status:'Supervised'},
    { photo:'/jiwoong.jpg', name: 'Alice Johnson', studentId:'29349835' ,level:'GL' , grade: 'A', email: 'alice@example.com' ,status:'Unsupervised'},
    { photo:'/jiwoong.jpg', name: 'Alice Johnson', studentId:'29349835' ,level:'sdia' , grade: 'A', email: 'alice@example.com' ,status:'supervised'},
    { photo:'/jiwoong.jpg', name: 'Alice Johnson', studentId:'29349835' ,level:'STIW' , grade: 'A', email: 'alice@example.com' ,status:'unsupervised'},
    { photo:'/jiwoong.jpg', name: 'Alice Johnson', studentId:'29349835' ,level:'GL' , grade: 'A', email: 'alice@example.com' ,status:'supervised'},
    { photo:'/rahma.jpg', name: 'Alice Johnson', studentId:'29349835' ,level:'sdia' , grade: 'A', email: 'alice@example.com' ,status:'supervised'},
  
  ];
  
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

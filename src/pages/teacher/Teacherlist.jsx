import React from 'react'
import DataGrid from '../../components/DataGrid';
import { teachersData, teachersGrid } from '../../data.js';
const Teacherlist = () => {

  ///////////get teacher /////////////
  const fetchTeachers = async () => {
    try {
      const response = await api.get('/user/teacher');
      teachersData=response.data;
    } catch (error) {
      console.error('Error Fetching Teachers:', error.response?.data || error.message);
    }
  };

  ///////////////////teacher profile///////////
  const fetchProfile = async () => {
    try {
      const response = await api.get('/user/teacher/profile');
      console.log('Profile:', response.data);
    } catch (error) {
      console.error('Error Fetching Profile:', error.response?.data || error.message);
    }
  };
  return (
    <div className='p-6 bg-slate-100 min-h-screen font-sans'>
    <DataGrid 
      data={teachersData}
      columns={teachersGrid}
      title="Professors"
      category="Informations"
      entityType="teacher"
    />
    </div>
  )
}

export default Teacherlist
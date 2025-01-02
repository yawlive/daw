import React from 'react'
import DataGrid from '../../components/DataGrid';
import { teachersData, teachersGrid } from '../../data.js';
const Teacherlist = () => {
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
import React from 'react'
import ContentHeader from './ContentHeader'
import '../styles/content.css';
 import StatCard from './statCard';
import AppTable from './AppTable';
const Content = () => {
  return (
    <div className="content">
      <ContentHeader/>
      <StatCard/><br /> 
      <AppTable/>
    </div>
  )
}

export default Content
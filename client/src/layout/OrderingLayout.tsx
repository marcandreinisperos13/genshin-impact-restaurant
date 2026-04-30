import React from 'react'
import { Outlet } from 'react-router-dom'

import Sidebar from '../components/Sidebar'
import Summary from '../components/Summary'

export default function OrderingLayout() {
  return (
    <div>
      <Sidebar />
      
      <Outlet />

      <Summary />
    </div>
  )
}

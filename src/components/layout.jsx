import React from 'react'
import Sidebar from '../sidebar'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <section className='flex'>
        <div className='min-w-60.25  bg-[#152259] h-screen fixed'>
            <Sidebar />
        </div>
       <div className='ml-60.25'>
       <Outlet />
       </div>
        
    </section>
  )
}

export default Layout
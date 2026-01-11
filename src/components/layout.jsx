import React from 'react'
import Sidebar from '../sidebar'
import { Outlet } from 'react-router-dom'
import { IoIosNotificationsOutline } from "react-icons/io";


const Layout = () => {
  return (
    <section className='flex'>
        <div className='min-w-60.25  bg-[#152259] h-screen fixed'>
            <Sidebar />
        </div>
       <div className='ml-60.25 p-4 w-[calc(100%-15rem)]'>
        <div className='w-[90%] mx-auto'>
            <div className='flex gap-4 items-center justify-end'>
                <span className='text-[24px]'>
            <IoIosNotificationsOutline />
                </span>
            <span className='text-[#424242] text-[14px] font-semibold'>Log out</span>
            </div>
        </div>
        <div className='w-[90%] mx-auto'>

       <Outlet />
        </div>
       </div>
        
    </section>
  )
}

export default Layout
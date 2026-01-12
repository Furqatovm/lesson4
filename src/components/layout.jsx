import React, { useState } from 'react'
import Sidebar from '../sidebar'
import { Outlet } from 'react-router-dom'
import { IoIosNotificationsOutline } from "react-icons/io";
import { HiMenuAlt2 } from "react-icons/hi"



const Layout = () => {
    const [mobile,setMobile] =useState(false);
  return (
    <section className='flex'>
        <div className={`${mobile ? 'min-w-60.25 ': ""} bg-[#152259] h-screen fixed   -translate-x-full
          transition-transform ${mobile ? 'translate-x-0':''} `}>
            
            <Sidebar />
            {/*  w-[calc(100%-15rem)] */}
        </div>
       <div className={`p-3   w-[calc(100%-15rem)]  ${mobile ? "ml-60 ": "ml-2 w-full"} `}>
        <div className='w-[95%] mx-auto flex justify-between items-center'> 

            <button
            onClick={() => setMobile(!mobile)}
            className="text-[26px] text-[#152259]"
          >
            <HiMenuAlt2 />
          </button>
            <div className='flex gap-4 items-center justify-end'>
                <span className='text-[24px]'>
            <IoIosNotificationsOutline />
                </span>
            <span className='text-[#424242] text-[14px] font-semibold'>Log out</span>
            </div>
        </div>
        <div className='w-[95%] mx-auto'>

       <Outlet />
        </div>
       </div>
        
    </section>
  )
}

export default Layout
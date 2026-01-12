import React from 'react'
import logo from "./assets/logo.png"
import { NavLink } from 'react-router-dom'
import { RiHome5Line } from "react-icons/ri";
import { BsPeople } from "react-icons/bs";
import { RiBankLine } from "react-icons/ri";
import { IoSettingsOutline } from "react-icons/io5";
import { TiChartBarOutline } from "react-icons/ti";





const Sidebar = () => {
  return (
    <aside>
        <div className='flex flex-col gap-4 items-center justify-center  h-[20%] border-b border-[#BDBDBD] py-8'>
            <img src={logo} className='w-16 h-16 rounded-full' alt="" />
            <span className='text-[14px] font-semibold text-white'>Nurillo Suyunboyev</span>
        </div>

        <div className='p-6 flex flex-col gap-2'>
            <NavLink to={"/dashboard"} className={({isActive}) => `text-white font-semibold  text-[1rem] flex gap-2 items-center p-2.5 rounded-sm border border-transparent hover:border-[#509CDB] ${isActive ? "bg-[#509CDB]":"bg-transparent"}`}>
            <div className='text-[18px]'>
            <RiHome5Line />
            </div>
                <span className='max-md:text-[12px]'>Dashboard</span>
            </NavLink>


            <NavLink to={"/teachers"} className={({isActive}) => `text-white font-semibold  text-[1rem] flex gap-2 items-center p-2.5 rounded-sm border border-transparent hover:border-[#509CDB] ${isActive ? "bg-[#509CDB]":"bg-transparent"}`}>
            <div className='text-[18px]'>
            <BsPeople />
            </div>
                <span className='max-md:text-[12px]'>Teachers</span>
            </NavLink>

            <NavLink to={"/students"} className={({isActive}) => `text-white font-semibold  text-[1rem] flex gap-2 items-center p-2.5 rounded-sm border border-transparent hover:border-[#509CDB] ${isActive ? "bg-[#509CDB]":"bg-transparent"}`}>
            <div className='text-[18px]'>
            <BsPeople />
            </div>
                <span className='max-md:text-[12px]'>Students</span>
            </NavLink>

            <NavLink to={"/billing"} className={({isActive}) => `text-white font-semibold  text-[1rem] flex gap-2 items-center p-2.5 rounded-sm border border-transparent hover:border-[#509CDB] ${isActive ? "bg-[#509CDB]":"bg-transparent"}`}>
            <div className='text-[18px]'>
            <RiBankLine />
            </div>
                <span className='max-md:text-[12px]'>Billing</span>
            </NavLink>

            <NavLink to={"/profile"} className={({isActive}) => `text-white font-semibold  text-[1rem] flex gap-2 items-center p-2.5 rounded-sm border border-transparent hover:border-[#509CDB] ${isActive ? "bg-[#509CDB]":"bg-transparent"}`}>
            <div className='text-[18px]'>
            <IoSettingsOutline />
            </div>
                <span className='max-md:text-[12px]'>Settings and profile</span>
            </NavLink>

            <NavLink to={"/exam"} className={({isActive}) => `text-white font-semibold  text-[1rem] flex gap-2 items-center p-2.5 rounded-sm border border-transparent hover:border-[#509CDB] ${isActive ? "bg-[#509CDB]":"bg-transparent"}`}>
            <div className='text-[18px]'>
            <TiChartBarOutline />
            </div>
                <span className='max-md:text-[12px]'>Exams</span>
            </NavLink>


        </div>


        <div className='p-6 py-5'>
        <NavLink to={"/new-feature"} className={({isActive}) => `text-white font-semibold  text-[1rem] flex gap-3 items-center p-2.5 rounded-sm border border-transparent hover:border-[#509CDB] ${isActive ? "bg-[#509CDB]":"bg-transparent"}`}>
            <div className='text-[18px]'>
            <RiBankLine />
            </div>
                <span className='max-md:text-[12px]'>Features</span>
                <span className='text-[#000000] text-[10px] p-0.5 rounded-lg bg-[#B9D7F1]'>NEW</span>
            </NavLink>
        </div>
    </aside>
  )
}

export default Sidebar
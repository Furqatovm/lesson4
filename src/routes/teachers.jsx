import { Button, Input } from 'antd'
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import UsersTable from './table'

const Teachers = () => {
  const [InputValue, setInputValue] =useState("");
  return (
    <div>
        <div className='flex justify-between py-4'>
            <span className='text-[#4F4F4F] text-[20px] font-medium'>Teachers</span>
            <NavLink to={"/teachers/add-teacher"}>
            <Button type='primary'>
                Add Teachers
            </Button>
            </NavLink>
        </div>
        <Input value={InputValue} onChange={(e) =>setInputValue(e.target.value)} type={"search"} placeholder={`Search for a teachers by name or email`} />

     <div className='py-8'>
     <UsersTable searchItem ={InputValue} />
     </div>
    </div>
  )
}

export default Teachers
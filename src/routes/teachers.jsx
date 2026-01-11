import { Button, Input } from 'antd'
import React from 'react'
import { NavLink } from 'react-router-dom'
import UsersTable from './table'

const Teachers = () => {
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
        <Input type={"search"} placeholder={`Search for a teachers by name or email`} />

     <div className='py-8'>
     <UsersTable />
     </div>
    </div>
  )
}

export default Teachers
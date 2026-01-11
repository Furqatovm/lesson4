import { Button, Input } from 'antd'
import React from 'react'

const Teachers = () => {
  return (
    <div className=' w-[90%] mx-auto'>
        <div className='flex justify-between py-4'>
            <span className='text-[#4F4F4F] text-[20px] font-medium'>Teachers</span>
            <Button type='primary'>
                Add Teachers
            </Button>
        </div>
        <Input type={"search"} placeholder='Search for a teachers by name or email' />
    </div>
  )
}

export default Teachers
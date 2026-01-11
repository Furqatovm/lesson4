import { Form, Input } from 'antd'
import React from 'react'

const Signup = () => {
  return (
    <div className='bg-[#fcfafa] h-screen flex items-center justify-center '>
        <div className='flex-col gap-2'>
            <h1 className='text-[#4F4F4F] font-semibold text-[36px] text-center py-6'>Welcome, Sign up</h1>
        <Form className='bg-white! p-3! w-120!  h-110!'>
            <div className='w-[55%] mx-auto flex flex-col gap-4 py-4'>
            <p className='my-6 text-[#667085] text-[1rem] font-medium leading-6.25 text-center'>It is our great pleasure to have you on board! </p>
            <Input type={"text"} className='text-[14px]! font-medium! p-2! text-[#8A8A8A]!' placeholder='Create your Login' required />
            <Input type={"text"} className='text-[14px]! font-medium! p-2! text-[#8A8A8A]!' placeholder='Create your Login' required />
            <Input type={"submit"} className='text-[14px]! font-medium! p-2! text-white! bg-[#2D88D4]! cursor-pointer!' value={"Sign up"} />
            </div>
        </Form>
        </div>
        
    </div>
  )
}

export default Signup
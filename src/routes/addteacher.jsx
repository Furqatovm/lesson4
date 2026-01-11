import { Button, Form, Input } from 'antd'
import React from 'react'

const AddTeachers = () => {
  return (
    <div>
        <div className='flex justify-between py-4'>
            <span className='text-[#4F4F4F] text-[20px] font-medium'>Teachers</span>
            <Button type='primary'>
                Save
            </Button>
        </div>
        <Form className='grid grid-cols-2 gap-4'>
            <Form.Item layout='vertical'
            label ={<span className='text-[#8A8A8A]! text-[14px]'>Full Name</span>}

            >
            <Input placeholder='Full Name' type={"text"} name='fullname' className='p-2!' />

            </Form.Item>


            <Form.Item layout='vertical'
            label ={<span className='text-[#8A8A8A]! text-[14px]'>Class</span>}

            >
            <Input placeholder='Class' type={"text"} name='Class' className='p-2!' />

            </Form.Item>


            <Form.Item layout='vertical'
            label ={<span className='text-[#8A8A8A]! text-[14px]'>Full Name</span>}

            >
            <Input placeholder='Full Name' type={"text"} name='fullname' className='p-2!' />

            </Form.Item>

            <Form.Item layout='vertical'
            label ={<span className='text-[#8A8A8A]! text-[14px]'>Full Name</span>}

            >
            <Input placeholder='Full Name' type={"text"} name='fullname' className='p-2!' />

            </Form.Item>

            <Form.Item layout='vertical'
            label ={<span className='text-[#8A8A8A]! text-[14px]'>Full Name</span>}

            >
            <Input placeholder='Full Name' type={"text"} name='fullname' className='p-2!' />

            </Form.Item>


            <Form.Item layout='vertical'
            label ={<span className='text-[#8A8A8A]! text-[14px]'>Full Name</span>}

            >
            <Input placeholder='Full Name' type={"text"} name='fullname' className='p-2!' />

            </Form.Item>


            <Form.Item layout='vertical'
            label ={<span className='text-[#8A8A8A]! text-[14px]'>Full Name</span>}

            >
            <Input placeholder='Full Name' type={"text"} name='fullname' className='p-2!' />

            </Form.Item>


            <Form.Item layout='vertical'
            label ={<span className='text-[#8A8A8A]! text-[14px]'>Full Name</span>}

            >
            <Input placeholder='Full Name' type={"text"} name='fullname' className='p-2!' />

            </Form.Item>
        </Form>
        
    </div>
  )
}

export default AddTeachers
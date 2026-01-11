import React from 'react';
import { Flex, Space, Table, Avatar, Tag } from 'antd';
import { teachers } from '../data/data';
import { NavLink, useNavigate } from 'react-router-dom';

const columns = [
    {
        title: "Name",
        key: "fullName",
        render: (_, record) => (
            <div className="flex items-center gap-3">
              <Avatar src={record.img} size={32} />
              <span className="font-medium">{record.fullName}</span>
            </div>
          ),
      },

    {
      title: "Subject",
      dataIndex: "subject",
      key: "subject",
    },
    {
      title: "Class",
      dataIndex: "class",
      key: "class",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Gender",
      dataIndex: "gender",
      key: "gender",
    },
  ];





const UsersTable = ({searchItem}) => {
    const navigate =useNavigate()


    const filteredData =teachers.filter((val) =>
        val.fullName.includes(searchItem.toLowerCase())||
        val.email.includes(searchItem.toLowerCase())||
        val.subject.includes(searchItem.toLowerCase())
    )
  return <Table  columns={columns} dataSource={filteredData} pagination={false} 
  rowKey="id"
      // Qator ustiga bosilganda navigate qilish
      onRow={(record) => ({
        onClick: () => navigate(`/teachers/details/${record.id}`)
      })}
      // Qatorni hover qilganda pointer ko‘rsatish uchun
      rowClassName={() => 'cursor-pointer'}
  />;
};

export default UsersTable;

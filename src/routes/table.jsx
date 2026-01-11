import React from 'react';
import { Flex, Space, Table, Avatar, Tag } from 'antd';
import { teachers } from '../data/data';

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


const UsersTable = () => {
  return <Table  columns={columns} dataSource={teachers} pagination={false} />;
};

export default UsersTable;

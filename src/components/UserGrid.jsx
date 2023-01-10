import React from 'react';
import { Space, Table, Tag } from 'antd';

const columns = [
  {
    title: 'Photo',
    dataIndex: 'thumbnail',
    key: 'thumbnail',
  },
  {
    title: 'First name',
    dataIndex: 'firstName',
    key: 'firstName',
  },
  {
    title: 'Last name',
    dataIndex: 'lastName',
    key: 'lastName',
  },
  {
    title: 'Username',
    dataIndex: 'username',
    key: 'username',
  },
  {
    title: 'email',
    dataIndex: 'email',
    key: 'email',
  },
];

const UserGrid = ({ data }) => {
  return (
    <>
      <div>UserGrid</div>
      <Table dataSource={data} columns={columns} pagination={false} />;
    </>
  );
};

export default UserGrid;

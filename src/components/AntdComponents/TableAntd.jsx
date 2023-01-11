import React from 'react';
import { Table } from 'antd';

const TableAntd = ({ dataSource, columns, pagination }) => {
  return (
    <Table dataSource={dataSource} columns={columns} pagination={pagination} />
  );
};

export default TableAntd;

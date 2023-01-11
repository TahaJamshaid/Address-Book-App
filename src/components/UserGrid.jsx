import React, { useState } from 'react';
import { Typography, Table, Tag, Button, Modal } from 'antd';
import TableAntd from '../components/AntdComponents/TableAntd';

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
  {
    title: 'More Details',
    dataIndex: 'modalButton',
    key: 'modalButton',
  },
];

const UserGrid = ({ data }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalData, setModalData] = useState({});
  const showModal = (key) => {
    setIsModalOpen(true);
    setModalData({
      street: data[key].location.street.number + data[key].location.street.name,
      city: data[key].location.city,
      state: data[key].location.state,
      postcode: data[key].location.postcode,
      phone: data[key].phone,
      cell: data[key].cell,
    });
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  data = data.map((item, key) => ({
    ...item,
    modalButton: (
      <Button type="primary" onClick={() => showModal(key)}>
        Show Details
      </Button>
    ),
  }));

  return (
    <>
      <Modal
        title="User Details"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Typography.Title level={5}>
          Street: {modalData.street}
        </Typography.Title>
        <Typography.Title level={5}>City: {modalData.city}</Typography.Title>
        <Typography.Title level={5}>State: {modalData.state}</Typography.Title>
        <Typography.Title level={5}>
          Postal Code: {modalData.postcode}
        </Typography.Title>
        <Typography.Title level={5}>Phone: {modalData.phone}</Typography.Title>
        <Typography.Title level={5}>Cell: {modalData.cell}</Typography.Title>
      </Modal>
      <TableAntd dataSource={data} columns={columns} pagination={false} />
    </>
  );
};

export default UserGrid;

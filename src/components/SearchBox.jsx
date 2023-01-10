import React, { useState } from 'react';
import { Input, Tag } from 'antd';
import { Col, Row } from 'antd';
import { SettingFilled } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const SearchBox = ({ searchTerm, handler }) => {
  const nationalityFilter = useSelector(
    (state) => state.users.nationalityFilter
  );
  let navigate = useNavigate();
  return (
    <>
      <Row>
        <Col span={8}>
          <Tag color="purple">{nationalityFilter}</Tag>
        </Col>
        <Col span={8}>
          <Input
            placeholder="Enter Name"
            value={searchTerm}
            onChange={handler}
          />
        </Col>
        <Col span={4}></Col>
        <Col span={4}>
          <SettingFilled
            style={{ fontSize: '24px', cursor: 'pointer' }}
            onClick={() => {
              console.log('working');
              navigate('/settings');
            }}
          />
        </Col>
      </Row>
    </>
  );
};

export default SearchBox;

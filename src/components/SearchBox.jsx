import React from 'react';
import { Input } from 'antd';
import { Col, Row } from 'antd';

const SearchBox = () => {
  return (
    <>
      <Row>
        <Col span={8}></Col>
        <Col span={8}>
          <Input placeholder="Enter Name" />
        </Col>
        <Col span={8}></Col>
      </Row>
    </>
  );
};

export default SearchBox;

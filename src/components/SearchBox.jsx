import React from 'react';
import { Tag } from 'antd';
import { Col, Row } from 'antd';
import { SettingFilled } from '@ant-design/icons';
import InputAntd from '../components/AntdComponents/InputAntd';

import { Link } from '@tanstack/react-router';
import { useSelector } from 'react-redux';

const SearchBox = ({ searchTerm, handler }) => {
  const nationalityFilter = useSelector(
    (state) => state.users.nationalityFilter
  );
  return (
    <>
      <Row>
        <Col span={8}>
          <Tag color="purple">{nationalityFilter}</Tag>
        </Col>
        <Col span={8}>
          <InputAntd
            placeholder="Enter Name"
            value={searchTerm}
            onChange={handler}
          />
        </Col>
        <Col span={4}></Col>
        <Col span={4}>
          <Link to="/settings">
            <SettingFilled style={{ fontSize: '24px', cursor: 'pointer' }} />
          </Link>
        </Col>
      </Row>
    </>
  );
};

export default SearchBox;

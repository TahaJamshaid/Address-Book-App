import React from 'react';
import { Select, Space, Row, Col } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { changeNationalityFilter } from '../redux/reducers/usersSlice';

const SelectNationality = () => {
  const dispatch = useDispatch();
  const nationalityFilter = useSelector(
    (state) => state.users.nationalityFilter
  );
  const handleChange = (value) => {
    console.log(`selected ${value}`);
    dispatch(changeNationalityFilter(value));
  };
  return (
    <Row span={8}>
      <Col span={4}></Col>
      <Col span={8}>
        <Space>
          <p>Select Nationality:</p>
          <Select
            defaultValue={nationalityFilter}
            style={{
              width: 160,
            }}
            onChange={handleChange}
            options={[
              {
                value: 'None',
                label: 'None',
              },
              {
                value: 'CH',
                label: 'Switzerland',
              },
              {
                value: 'ES',
                label: 'Spain',
              },
              {
                value: 'GB',
                label: 'Great Britain',
              },
              {
                value: 'FR',
                label: 'France',
              },
            ]}
          />
        </Space>
      </Col>
    </Row>
  );
};

export default SelectNationality;

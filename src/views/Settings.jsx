import React from 'react';
import { Row, Col, Typography, Layout, Space } from 'antd';
import { ArrowLeftOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import SelectNationality from '../containers/SelectNationality';

const Settings = () => {
  // CH, ES, FR, GB

  return (
    <>
      <SettingsHeader />
      <Layout>
        <SelectNationality />
      </Layout>
    </>
  );
};

const SettingsHeader = () => {
  let navigation = useNavigate();
  return (
    <Layout.Header
      style={{
        backgroundColor: '#FAFAFA',
      }}
    >
      <Row>
        <Col span={8}>
          <Space
            onClick={() => {
              console.log('go back!!');
              navigation(-1);
            }}
            style={{ cursor: 'pointer' }}
          >
            <ArrowLeftOutlined
              style={{ fontSize: '24px', cursor: 'pointer' }}
            />
            <Typography.Title
              style={{ paddingBottom: '15px', marginBottom: '15px' }}
              level={4}
            >
              Back
            </Typography.Title>
          </Space>
        </Col>
        <Col span={8}>
          <Typography.Title style={{ padding: '12px', margin: '0' }} level={2}>
            Settings Page
          </Typography.Title>
        </Col>
      </Row>
    </Layout.Header>
  );
};

export default Settings;

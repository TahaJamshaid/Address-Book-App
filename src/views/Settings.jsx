import React from 'react';
import { 
  Row, Col, Typography, Layout, Space 
} from 'antd';
import { ArrowLeftOutlined } from '@ant-design/icons';
import { Link } from '@tanstack/react-router';
import SelectNationality from '../containers/SelectNationality';


const Settings = () => {


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
  return (
    <Layout.Header
      style={{
        backgroundColor: '#FAFAFA',
      }}
    >
      <Row>
        <Col span={8}>
          <Link to="/">
            <Space style={{ cursor: 'pointer' }}>
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
          </Link>
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

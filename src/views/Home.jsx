import React, { useState, useEffect } from 'react';

import Search from '../containers/Search';
import UserResults from '../containers/UserResults';
import { Layout } from 'antd';

const Home = () => {
  const [searchTerm, setSearchTerm] = useState('');
  console.log(searchTerm);
  return (
    <>
      <Layout.Header
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 1,
          width: '100%',
          backgroundColor: '#FAFAFA',
        }}
      >
        <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      </Layout.Header>
      <Layout>
        <UserResults searchTerm={searchTerm} />
      </Layout>
    </>
  );
};

export default Home;

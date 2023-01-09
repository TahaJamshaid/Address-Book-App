import React from 'react';

import Search from '../containers/Search';
import UserResults from '../containers/UserResults';

const Home = () => {
  console.log('running');
  return (
    <>
      <Search />
      <UserResults />
    </>
  );
};

export default Home;

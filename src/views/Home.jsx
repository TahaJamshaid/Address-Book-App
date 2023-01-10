import React, { useState, useEffect } from 'react';

import Search from '../containers/Search';
import UserResults from '../containers/UserResults';

const Home = () => {
  const [searchTerm, setSearchTerm] = useState('');
  console.log(searchTerm);
  return (
    <>
      <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <UserResults searchTerm={searchTerm} />
    </>
  );
};

export default Home;

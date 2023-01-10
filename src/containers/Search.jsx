import React from 'react';
import SearchBox from '../components/SearchBox';

const Search = ({ searchTerm, setSearchTerm }) => {
  const onSearchTermChangeHandler = (event) => {
    setSearchTerm(event.target.value);
  };
  return (
    <>
      <SearchBox searchTerm={searchTerm} handler={onSearchTermChangeHandler} />
    </>
  );
};

export default Search;

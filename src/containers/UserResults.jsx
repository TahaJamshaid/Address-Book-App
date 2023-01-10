import React, { useState, useEffect } from 'react';
import requestUsers from '../api/userApi';
import useSWRImmutable from 'swr/immutable';
import UserGrid from '../components/UserGrid';
import { Image, Avatar } from 'antd';

// for redux
import { useDispatch } from 'react-redux';
import { addUsers } from '../redux/reducers/usersSlice';

const UserResults = ({ searchTerm }) => {
  const { data, error, isLoading } = useSWRImmutable(
    '?results=100',
    requestUsers
  );

  const dispatch = useDispatch();

  console.log('working');

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  dispatch(addUsers(...data.results));

  const filterData = data.results.filter(
    (item) =>
      item.name.first.includes(searchTerm) ||
      item.name.last.includes(searchTerm)
  );

  let neededData = filterData.map((item, index) => ({
    key: index,
    firstName: item.name.first,
    lastName: item.name.last,
    titleOfName: item.name.title,
    username: item.login.username,
    email: item.email,
    gender: item.gender,
    location: {
      street: item.location.street,
      city: item.location.city,
      state: item.location.state,
      postcode: item.location.postcode,
    },
    phone: item.phone,
    cell: item.cell,
    thumbnail: (
      <Avatar
        src={<Image src={item.picture.thumbnail} style={{ width: 32 }} />}
      />
    ),
  }));

  console.log(neededData);
  return (
    <>
      <UserGrid data={neededData} />
    </>
  );
};

export default UserResults;

import React, { useState, useEffect } from 'react';
import requestUsers from '../api/userApi';
import useSWR from 'swr';
import UserGrid from '../components/UserGrid';
import { Image, Avatar } from 'antd';
import useInfiniteScroll from '../hooks/useInfiniteScroll';
// redux imports
import { useSelector, useDispatch } from 'react-redux';
import { addUsers } from '../redux/reducers/usersSlice';

const UserResults = ({ searchTerm }) => {
  const page = useInfiniteScroll();

  const {
    data: newData,
    error,
    isLoading,
  } = useSWR(`?page=${page}&results=100&seed=abc`, requestUsers);

  const dispatch = useDispatch();
  useEffect(() => {
    if (newData) {
      dispatch(addUsers(newData.results));
      console.log(newData.results);
    }
  }, [newData]);
  const data = useSelector((state) => state.users);

  // if (isLoading) {
  //   return <p>data is loading...</p>;
  // }

  // if (error) {
  //   return <p>Error unable to fetch data</p>;
  // }

  console.log('working');

  const filterData = data.filter(
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

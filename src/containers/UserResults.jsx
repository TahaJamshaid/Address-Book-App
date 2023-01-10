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
  const data = useSelector((state) => state.users.users);
  const nationalityFilter = useSelector(
    (state) => state.users.nationalityFilter
  );

  const dispatch = useDispatch();
  useEffect(() => {
    if (newData && data.length < 100 * page) {
      dispatch(addUsers(newData.results));
    }
  }, [newData]);

  const filterData = data.filter(
    (item) =>
      (item.name.first.includes(searchTerm) ||
        item.name.last.includes(searchTerm)) &&
      (nationalityFilter != 'None' ? item.nat == nationalityFilter : true)
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

import React, { useState, useEffect } from 'react';
import requestUsers from '../api/userApi';
import useSWR from 'swr';
import UserGrid from '../components/UserGrid';
import { Image, Avatar, Spin, Row, Col } from 'antd';
import useInfiniteScroll from '../hooks/useInfiniteScroll';
// redux imports
import { useSelector, useDispatch } from 'react-redux';
import { addUsers } from '../redux/reducers/usersSlice';

const USERS_PER_PAGE = 100;

const UserResults = ({ searchTerm }) => {
  const page = useInfiniteScroll();
  const dispatch = useDispatch();
  const nationalityFilter = useSelector(
    (state) => state.users.nationalityFilter
  );

  const {
    data: newData,
    error,
    isLoading,
  } = useSWR(`?page=${page}&results=${USERS_PER_PAGE}&seed=abc`, requestUsers);
  const data = useSelector((state) => state.users.users);

  useEffect(() => {
    if (
      newData &&
      data.length < USERS_PER_PAGE * page &&
      nationalityFilter == 'None'
    ) {
      dispatch(addUsers(newData.results));
    }
  }, [newData]);

  const filterData = data.filter(
    (item) =>
      (item.name.first.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.name.last.toLowerCase().includes(searchTerm.toLowerCase())) &&
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

  if (data.length == 0 && isLoading) {
    return (
      <>
        <Spin tip="Loading" size="large">
          <div className="content" />
        </Spin>
      </>
    );
  }
  return (
    <>
      <UserGrid data={neededData} />
      <Row align="center">
        <Col span={6}></Col>
        <Col span={5}>
          <Spin tip="Loading" size="large">
            <div className="content" />
          </Spin>
        </Col>
      </Row>
    </>
  );
};

export default UserResults;

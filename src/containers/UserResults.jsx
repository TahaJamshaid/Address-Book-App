import React from 'react';
import requestUsers from '../api/userApi';
import useSWRImmutable from 'swr/immutable';
import UserGrid from '../components/UserGrid';
import { Image, Avatar } from 'antd';

const UserResults = () => {
  const { data, error, isLoading } = useSWRImmutable(
    '?results=100',
    requestUsers
  );

  console.log('working');

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  console.log('running');
  console.log(data);

  let neededData = data.results.map((item, index) => ({
    key: item.name + index,
    firstName: item.name.first,
    lastName: item.name.last,
    titleOfName: item.name.title,
    username: item.login.username,
    email: item.email,
    gender: item.gender,
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

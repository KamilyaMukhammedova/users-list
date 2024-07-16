import React from 'react';
import UsersList from '../components/UsersList.tsx';
import { IUser } from '../types/User.ts';

const testObj: IUser = {
  address: {
    geolocation: {
      lat: '-37.3159',
      long: '81.1496',
    },
    city: 'kilcoole',
    street: 'new road',
    number: 7682,
    zipcode: '12926-3874',
  },
  id: 1,
  email: 'john@gmail.com',
  username: 'johnd',
  password: 'm38rmF$',
  name: {
    firstname: 'john',
    lastname: 'doe',
  },
  phone: '1-570-236-7033',
  __v: 0,
};
const testArr = new Array(9).fill(testObj);

const Users: React.FC = () => {
  return (
    <div>
      Users
      <UsersList users={testArr} />
    </div>
  );
};

export default Users;

import React from 'react';
import { IUser } from '../types/User.ts';
import UserCard from './UserCard.tsx';

interface IProps {
  users: IUser[];
}

const UsersList: React.FC<IProps> = ({ users }) => {
  return (
    <article className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 w-full">
      {users.map((user) => (
        <UserCard
          key={user.id}
          username={user.username}
          email={user.email}
          phone={user.phone}
        />
      ))}
    </article>
  );
};

export default UsersList;

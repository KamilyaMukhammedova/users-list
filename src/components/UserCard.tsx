import React from 'react';

interface IProps {
  username: string;
  email: string;
  phone: string;
}

const UserCard: React.FC<IProps> = ({ username, email, phone }) => {
  return (
    <div className="px-2 py-4 bg-purple-100 border border-gray-300 rounded-lg shadow-xl text-center">
      <p className="font-bold">{username}</p>
      <p>
        <span className="text-gray-500">email: </span>
        {email}
      </p>
      <p>
        <span className="text-gray-500">phone: </span>
        {phone}
      </p>
    </div>
  );
};

export default UserCard;

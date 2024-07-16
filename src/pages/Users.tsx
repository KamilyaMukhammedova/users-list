import React from 'react';
import { usePage } from '../hooks/usePage.ts';
import { fetchUsersAction } from '../store/actions/UsersActions.ts';
import Title from '../components/ui/Title.tsx';
import UsersList from '../components/UsersList.tsx';

const Users: React.FC = () => {
  const { data, fetching, error } = usePage(fetchUsersAction, 'users');

  return (
    <>
      <Title titleName={'Users'} />
      <div className="my-4">
          {fetching && <p>Loading...</p>}
          {!fetching && error ? <p>Error..</p> : <UsersList users={data} />}
      </div>
    </>
  );
};

export default Users;

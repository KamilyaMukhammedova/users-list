import React, { useEffect, useMemo, useState } from 'react';
import { usePage } from '../hooks/usePage.ts';
import useDebounce from '../hooks/useDebounce.ts';
import { IUser } from '../types/User.ts';
import { fetchUsersAction } from '../store/actions/UsersActions.ts';
import Title from '../components/ui/Title.tsx';
import SearchInput from '../components/SearchInput.tsx';
import UsersList from '../components/UsersList.tsx';

const Users: React.FC = () => {
  const { data, fetching, error } = usePage(fetchUsersAction, 'users');

  const [searchValue, setSearchValue] = useState('');
  const [displayedUsers, setDisplayedUsers] = useState<IUser[]>([]);

  const debouncedSearchValue = useDebounce(searchValue);

  const filteredUsers = useMemo(() => {
    return data.filter(
      (user) =>
        user.username
          .toLowerCase()
          .includes(debouncedSearchValue.toLowerCase()) ||
        user.email.toLowerCase().includes(debouncedSearchValue.toLowerCase()) ||
        user.phone.includes(debouncedSearchValue),
    );
  }, [data, debouncedSearchValue]);

  useEffect(() => {
    if (debouncedSearchValue && !filteredUsers.length) {
      setDisplayedUsers([]);
    } else {
      setDisplayedUsers(filteredUsers.length ? filteredUsers : data);
    }
  }, [filteredUsers, debouncedSearchValue, data]);

  return (
    <>
      <Title titleName={'Users'} />
      <div className="my-5">
        <SearchInput
          placeholder={'Search by username, email or phone'}
          value={searchValue}
          setValue={setSearchValue}
        />
      </div>
      <div className="my-4">
        {fetching && <p>Loading...</p>}
        {!fetching && error ? <p>Error..</p> : <UsersList users={displayedUsers} />}
      </div>
    </>
  );
};

export default Users;

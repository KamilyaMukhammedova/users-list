import React, { useEffect, useMemo, useState } from 'react';
import { usePage } from '../hooks/usePage.ts';
import useDebounce from '../hooks/useDebounce.ts';
import { IUser } from '../types/User.ts';
import { fetchUsersAction } from '../store/actions/UsersActions.ts';
import Title from '../components/ui/Title.tsx';
import SearchInput from '../components/SearchInput.tsx';
import UsersList from '../components/UsersList.tsx';
import Spinner from '../components/ui/Spinner.tsx';
import ErrorMessage from '../components/ui/ErrorMessage.tsx';
import Message from '../components/ui/Message.tsx';

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
        {fetching && <Spinner />}
        {!fetching && error && <ErrorMessage text={error} />}
        {!fetching &&
          !error &&
          !debouncedSearchValue &&
          !displayedUsers.length && <Message text={'No data'} />}
        {!fetching &&
          !error &&
          debouncedSearchValue &&
          !displayedUsers.length && <Message text={'No search results'} />}
        {!fetching && !error && displayedUsers.length > 0 && (
          <UsersList users={displayedUsers} />
        )}
      </div>
    </>
  );
};

export default Users;

import { AsyncThunk, createAsyncThunk } from '@reduxjs/toolkit';
import { axiosApi } from '../../api/axios.ts';
import { IUser } from '../../types/User.ts';

type FetchUsersActionType = AsyncThunk<IUser[], string | undefined, object>;

const limit = 9;
const limitQuery = `?limit=${limit}`;

export const fetchUsersAction: FetchUsersActionType = createAsyncThunk<
  IUser[],
  string | undefined
>('users/fetch', async (queryPage = limitQuery) => {
  const response = await axiosApi.get<IUser[]>('/users' + queryPage);

  return response.data;
});
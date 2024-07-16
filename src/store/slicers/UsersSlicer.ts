import { createSlice } from '@reduxjs/toolkit';
import { IUsersState } from '../../types/User.ts';
import { fetchUsersAction } from '../actions/UsersActions.ts';

const initialState: IUsersState = {
    data: [],
    fetching: false,
    error: '',
};

export const usersSlice = createSlice({
    name: 'Users',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchUsersAction.pending, (state) => {
            state.fetching = true;
            state.error = '';
        });
        builder.addCase(fetchUsersAction.fulfilled, (state, action) => {
            state.fetching = false;
            state.data = action.payload;
        });
        builder.addCase(fetchUsersAction.rejected, (state, action) => {
            state.fetching = false;
            state.error = action.error.message;
        });
    },
});

export default usersSlice.reducer;

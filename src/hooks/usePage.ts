import { useCallback, useEffect } from 'react';
import { Action, ThunkAction } from '@reduxjs/toolkit';
import { useAppDispatch, useAppSelector } from './redux';
import { RootState } from '../store/store';

export const usePage = (
    action: () => ThunkAction<unknown, RootState, undefined, Action<string>>,
    reducerName: keyof RootState,
) => {
    const dispatch = useAppDispatch();
    const { fetching, data, error } = useAppSelector(
        (state) => state[reducerName],
    );

    const fetchAction = useCallback(() => {
        dispatch(action());
    }, [action, dispatch]);

    useEffect(() => {
        fetchAction();
    }, [fetchAction]);

    return { fetching, data, error };
};

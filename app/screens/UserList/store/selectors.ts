import { CoreState } from 'app/core';
import { createSelector } from 'reselect';

const getUserListState = (state: CoreState) => state.userList;

export const getPage = createSelector(getUserListState, state => state.page);
export const getData = createSelector(getUserListState, state => state.data);
export const getTerm = createSelector(getUserListState, state => state.term);
export const getSortedUsers = createSelector(getUserListState, state => state.users.sort((a, b) => a.name.last.localeCompare(b.name.last)));

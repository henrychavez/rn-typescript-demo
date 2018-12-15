import { combineReducers } from 'redux';

import { store as userList } from 'app/screens/UserList';
import { store as userDetail } from 'app/screens/UserDetail';

export interface CoreState {
  userList: userList.State;
  userDetail: userDetail.State;
}

const reducers: any = {
  userList: userList.reducer,
  userDetail: userDetail.reducer,
};

export default combineReducers(reducers);

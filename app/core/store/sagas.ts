import { all } from 'redux-saga/effects';

import { store as userList } from 'app/screens/UserList';


export default function* rootSaga() {
  yield all([
    ...userList.saga,
  ]);
}

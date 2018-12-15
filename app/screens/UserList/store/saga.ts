import {
  put,
  takeLatest,
  select,
} from 'redux-saga/effects';
import { Saga } from 'app/core';
import { getActionType } from 'app/core/store/utils';
import { AxiosResponse } from 'axios';

import { ApiClient } from '../services';

import actions from './actions';
import { getPage, getData, getTerm } from './selectors';

function* LoadUsers() {
  const page = yield select(getPage);
  try {
    const response: AxiosResponse = yield ApiClient.loadUsers({
      params: {
        page,
        seed: 'abc',
        results: 30,
        nat: 'US',
        noinfo: true,
      },
    });
    yield put(actions.showUsers(response.data));
  } catch (error) {
    yield put(actions.requestError());
  }
}

function* SearchUser() {
  const users: any[] = yield select(getData);
  const term: string = yield select(getTerm);

  const includes = (value: string) => value.includes(term.trim().toLowerCase());
  const filteredUsers = users.filter(({ name }) => includes(name.last));

  yield put(actions.updateUsers(filteredUsers));
}

const sagas: Saga[] = [
  {
    action: getActionType(actions.loadUsers),
    effect: LoadUsers,
  },
  {
    action: getActionType(actions.updateTerm),
    effect: SearchUser,
  },
];

export default sagas.map(saga => takeLatest(saga.action, saga.effect));

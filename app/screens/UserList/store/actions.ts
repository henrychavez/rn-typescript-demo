import {
  createAction,
} from 'redux-actions';
import { Action } from 'app/core';

export type Actions = {
  loadUsers: Action,
  showUsers: Action<any[]>,
  updateTerm: Action<string>,
  updateUsers: Action<any[]>,
  requestError: Action,
};

const actions: { [k in keyof Actions]: any } = {
  loadUsers: createAction('@UserList/loadUsers'),
  showUsers: createAction('@UserList/showUsers'),
  updateTerm: createAction('@UserList/updateTerm'),
  updateUsers: createAction('@UserList/updateUsers'),
  requestError: createAction('@UserList/requestError'),
};

export default actions;

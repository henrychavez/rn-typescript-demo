
import {
  handleActions,
  ReducerMap,
} from 'redux-actions';

import actions from './actions';
import { getActionType } from 'app/core/store/utils';

export interface State {
  users: any[];
  data: any[];
  page: number;
  term: string;
  isLoding: boolean;
}

export const initialState: State = {
  users: [],
  data: [],
  page: 0,
  term: '',
  isLoding: true,
};

const reducer: ReducerMap<State, any> = {
  [getActionType(actions.loadUsers)]: state => ({
    ...state,
    page: state.page + 1,
  }),
  [getActionType(actions.showUsers)]: (state, action) => ({
    ...state,
    users: [...state.users, ...action.payload],
    data: [...state.users, ...action.payload],
    term: '',
    isLoding: false,
  }),
  [getActionType(actions.requestError)]: state => ({
    ...state,
    isLoding: false,
  }),
  [getActionType(actions.updateTerm)]: (state, action) => ({
    ...state,
    term: action.payload.trim(),
  }),
  [getActionType(actions.updateUsers)]: (state, action) => ({
    ...state,
    users: action.payload,
  }),
};

export default handleActions(reducer, initialState);

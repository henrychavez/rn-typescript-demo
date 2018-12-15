
import {
  handleActions,
  ReducerMap,
} from 'redux-actions';

import actions from './actions';
import { getActionType } from 'app/core/store/utils';

export interface State {
  name: string;
  picture: string;
  location: string;
}

export const initialState: State = {
  name: '',
  picture: '',
  location: '',
};

const reducer: ReducerMap<State, any> = {
  [getActionType(actions.setName)]: (state, { payload }) => ({
    ...state,
    name: `${payload.last}, ${payload.first}`,
  }),
  [getActionType(actions.setPicture)]: (state, { payload }) => ({
    ...state,
    picture: payload.large,
  }),
  [getActionType(actions.setLocation)]: (state, { payload }) => ({
    ...state,
    location: `${payload.street}, ${payload.state}`,
  }),
};

export default handleActions(reducer, initialState);

import {
  createAction,
} from 'redux-actions';
import { Action } from 'app/core';

export type Actions = {
  setName: Action<{ first: string, last: string }>,
  setLocation: Action<{ street: string, state: string }>,
  setPicture: Action<{ large: string, medium: string, thumbnail: string }>,
};

const actions: { [k in keyof Actions]: any } = {
  setName: createAction('@UserDetail/setName'),
  setLocation: createAction('@UserDetail/setLocation'),
  setPicture: createAction('@UserDetail/setPicture'),
};

export default actions;

import {
  Action,
  ActionFunction0,
  ActionFunction1,
  BaseAction,
  ReducerMapValue,
} from 'redux-actions';

export type ActionFunction<Payload = undefined> = Payload extends undefined
  ? ActionFunction0<BaseAction> : Payload extends boolean
  ? ActionFunction1<boolean, Action<boolean>> : ActionFunction1<Payload, Action<Payload>>;

export type Reducer<State, Actions> = {
  [k in keyof Actions]: ReducerMapValue<State, any>;
};

export type Saga = {
  action: string,
  effect: any,
};
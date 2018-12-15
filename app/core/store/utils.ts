import {
  Action,
  ActionFunctionAny,
} from 'redux-actions';

export function getActionType(action: ActionFunctionAny<Action<any>>): string {
  const { type } = action();
  return type;
}

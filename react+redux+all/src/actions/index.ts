import { ActionTypes } from '@constants/ActionTypes';
import { createAction, ActionFunction0, ActionFunction1, Action, createActions } from 'redux-actions';
import { ThunkDispatch } from 'redux-thunk';

export const request: AppRequestAction = createAction(ActionTypes.ADD_REQUEST);
export const failure: AppFailureAction = createAction(ActionTypes.ADD_FAILURE, (error: Error) => ({
  error
}));
export const success = createAction(ActionTypes.ADD_SUCCESS);

export interface ErrorPayload {
  error: Error;
}

export type AppRequestAction = ActionFunction0<Action<any>>;
export type AppSuccessAction = ActionFunction0<Action<any>>;
export type AppFailureAction = ActionFunction1<Error, Action<ErrorPayload>>;

export const add = () => (dispatch: ThunkDispatch) => {
  dispatch(request);

  try {
    dispatch(success);
  } catch (err) {
    dispatch(failure(err));
  }
};

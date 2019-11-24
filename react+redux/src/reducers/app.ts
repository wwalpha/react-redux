import { Action } from 'redux';
import { ActionTypes } from '@constants/ActionTypes';

const initialState: Counter = {
  count: 0
};

const app = (state = initialState, action: Action) => {
  switch (action.type) {
    case ActionTypes.ADD_SUCCESS:
      // PLUS Action
      return {
        ...state,
        count: state.count + 1
      };
    case ActionTypes.REMOVE_SUCCESS:
      // MINUS Action
      return {
        ...state,
        count: state.count - 1
      };
    default:
      return state;
  }
};

export interface Counter {
  count: number;
}

export default app;

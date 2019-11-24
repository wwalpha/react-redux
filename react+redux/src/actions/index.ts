import { Action } from 'redux';
import { ActionTypes } from '@constants/ActionTypes';

interface AddAction extends Action {
  type: ActionTypes.ADD_SUCCESS;
}

interface RemoveAction extends Action {
  type: ActionTypes.REMOVE_SUCCESS;
}

export const add = (): AddAction => ({
  type: ActionTypes.ADD_SUCCESS
});

export const remove = (): RemoveAction => ({
  type: ActionTypes.REMOVE_SUCCESS
});

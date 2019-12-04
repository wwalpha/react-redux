import { Action } from 'redux';
import { ActionTypes } from '@constants/ActionTypes';
import { App } from 'src/models';
import { handleActions } from 'redux-actions';

const app = handleActions<App, any>(
  {
    /** Add */
    [ActionTypes.ADD_REQUEST]: (store: App) => store,
    [ActionTypes.ADD_SUCCESS]: (store: App) => store.add(),
    [ActionTypes.ADD_FAILURE]: (store: App) => store,

    /** Add */
    [ActionTypes.REMOVE_REQUEST]: (store: App) => store,
    [ActionTypes.REMOVE_SUCCESS]: (store: App) => store.remove(),
    [ActionTypes.REMOVE_FAILURE]: (store: App) => store
  },
  new App()
);

export default app;

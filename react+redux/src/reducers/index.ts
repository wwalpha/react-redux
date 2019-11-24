import { combineReducers } from 'redux';
import app, { Counter } from './app';

export default combineReducers({
  app
});

export interface State {
  app: Counter;
}

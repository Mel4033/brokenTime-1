import { combineReducers } from 'redux';
import counter from './counter';
import cards from './data';

export default combineReducers({
  counter,
  cards,
});

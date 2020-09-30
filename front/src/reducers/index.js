import { combineReducers } from 'redux';
import counter from './counter';
import cards from './cardData';
import fiction from './fiction';

export default combineReducers({
  counter,
  cards,
  fiction,
});

import { combineReducers } from 'redux';
import counter from './counter';
import cards from './cardData';
import fiction from './fiction';
import user from './user';
import profilCard from './profilCard';

export default combineReducers({
  counter,
  cards,
  fiction,
  user,
  profilCard,
});

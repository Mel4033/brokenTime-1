import { combineReducers } from 'redux';
import counter from './counter';
import fiction from './fiction';
import user from './user';
import library from './library'
import profilCard from './profilCard';
import notFound from './notFound';

export default combineReducers({
  counter,
  fiction,
  user,
  library,
  profilCard,
  notFound,
});

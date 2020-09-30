import { combineReducers } from 'redux';
import counter from './counter';
import fiction from './fiction';

export default combineReducers({
  counter,
  fiction,
});

// Import actions here
import { SWITCH_PROFIL_DISPLAY } from '../actions/profilCard';

const initialState = {
  readMode: true,
};

const profilCard = (state = initialState, action = {}) => {
  switch (action.type) {
    default:
      return state;
    case SWITCH_PROFIL_DISPLAY:
      return {
        ...state,
        readMode: !state.readMode,
      };
  }
};

export default profilCard;

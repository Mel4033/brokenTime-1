import {
    INPUT_CHANGE,
} from '../actions/burgerMenu';


const initialState = {
    inputOpen: false,
}

const user = (state = initialState, action = {}) => {
    switch (action.type) {
case INPUT_CHANGE:

    return {
      ...state,
    };
  default:
    return state;
    }
};

 export default burgerMenu;
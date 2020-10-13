import { FETCH_LIBRARY_SUCCESS } from '../actions/library';

const initialState = {
  list: [],
};
const libraryReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case FETCH_LIBRARY_SUCCESS:
      return {
        ...state,
        list: [...action.payload],
      };
    default:
      return state;
  }
};

export const getLibraryCards = (librarys) => librarys.map((dataObject) => ({
  id: dataObject.id,
  title: dataObject.title,
  picture: dataObject.picture,
  summary: dataObject.summary,
}));
export default libraryReducer;

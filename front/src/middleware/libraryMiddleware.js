import axios from 'axios';
import { fetchLibrarySuccess, FETCH_LIBRARY } from '../actions/library';

const libraryMiddleware = (store) => (next) => (action) => {
  next(action);
  switch (action.type) {
    default:
      break;
    case FETCH_LIBRARY:

      axios({
        method: 'get',
        url: 'http://ec2-23-20-252-110.compute-1.amazonaws.com/api/fiction',
      })
        .then((response) => {
          const { data } = response;
          store.dispatch(fetchLibrarySuccess(data));
        })
        .catch((error) => {
          // console.log(error);
        });
      break;
  }
};

export default libraryMiddleware;

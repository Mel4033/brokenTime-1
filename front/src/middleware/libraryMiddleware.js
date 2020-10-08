import axios from 'axios';
import {fetchLibrarySuccess, FETCH_LIBRARY} from '../actions/library';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

const libraryMiddleware = (store) => (next) => (action) => {

    next(action);
    console.log('middlewareHere');
    switch (action.type) {
        default:
          break;
        case FETCH_LIBRARY:
         
        axios({
            method: 'get',
            url: 'http://ec2-23-20-252-110.compute-1.amazonaws.com/api/fiction',
            headers: {
                authorization: `Bearer ${cookies.get('token').token}`,
              },
        })
            .then((response) => {
             console.log(response);
             const { data } = response;
             store.dispatch(fetchLibrarySuccess(data));
             })
             .catch((error) => {
             console.log(error);
             });
              
         break;
    }
};
        
        export default libraryMiddleware;


import axios from 'axios';

import {FETCH_LIBRARY} from '../actions/library';

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
            data: {
            title: store.getState().fiction.Data.title,
            resume: store.getState().fiction.Data.resume,
            thumbnail: store.getState().fiction.Data.thumbnail,
            },
        })
            .then((response) => {
             console.log(response);
             const {data} = res;
             })
             .catch((error) => {
             console.log(error);
             });
              
         break;
    }
};
        
        export default libraryMiddleware;


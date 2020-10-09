export const FETCH_LIBRARY = 'FETCH_LIBRARY';
export const FETCH_LIBRARY_SUCCESS = 'FETCH_LIBRARY_SUCCESS';
export const FETCH_LIBRARY_ERROR ='FETCH_LIBRARY_ERROR';

export const fetchLibrary = () => ({
  type: FETCH_LIBRARY,
});

export const fetchLibrarySuccess = (payload) => ({
  type: FETCH_LIBRARY_SUCCESS,
  payload,
});

export const fetchLibraryError = ( ) => ({
  type: FETCH_LIBRARY_ERROR,
});
export const FETCH_LIBRARY = 'FETCH_LIBRARY';
export const FETCH_LIBRARY_SUCCES = 'FETCH_LIBRARY_SUCCES';
export const FETCH_LIBRARY_ERROR ='FETCH_LIBRARY_ERROR';

export const fetchLibrary = () => ({
    type: FETCH_LIBRARY,
});

export const fetchLibrarySucces = (payload) => ({
    type: FETCH_LIBRARY_SUCCES,
    payload
});

export const fetchLibraryError = ( ) => ({
    type: FETCH_LIBRARY_ERROR,
});
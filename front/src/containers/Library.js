import { connect } from 'react-redux';
import Library from '../components/Library';
import { fetchLibrary } from '../actions/library';
import { getLibraryCards } from '../reducers/library';

const mapState = (state) => ({
    list: getLibraryCards(state.library.list),
  });


const mapDispatch = (dispatch) => ({
    fetchLibrary: () => {
        dispatch(fetchLibrary());
    }
});

export default connect(mapState, mapDispatch)(Library);
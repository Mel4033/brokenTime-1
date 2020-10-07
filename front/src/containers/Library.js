import { connect } from 'react-redux';
import Library from '../components/Library';
import {fetchLibrary} from '../actions/library';

const mapState = null;


const mapDispatch = (dispatch) => ({
    fetchLibrary: () => {
        dispatch(fetchLibrary());
    }
});

export default connect(mapState, mapDispatch)(Library);
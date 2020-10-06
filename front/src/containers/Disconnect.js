import { connect } from 'react-redux';
import Disconnect from '../components/Header/UserForm/Disconnect';
import { disconnectUser } from '../actions/user';

const mapState = null;

const mapDispatch = (dispatch) => ({
  disconnectUser: () => {
    dispatch(disconnectUser());
  },
});

export default connect(mapState, mapDispatch)(Disconnect);

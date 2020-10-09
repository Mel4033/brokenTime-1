import { connect } from 'react-redux';
import App from '../components/App';
import { checkAuth } from '../actions/user';

const mapState = (state) => ({
  isLogged: state.user.isLogged,
  isLoading: state.user.isLoading,
});

const mapDispatch = (dispatch) => ({
  checkAuth: () => {
    dispatch(checkAuth());
  },
});

export default connect(mapState, mapDispatch)(App);

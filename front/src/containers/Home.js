import { connect } from 'react-redux';
import Home from '../components/Home';

const mapState = (state) => ({
  isLogged: state.user.isLogged,
});

const mapDispatch = null;

export default connect(mapState, mapDispatch)(Home);

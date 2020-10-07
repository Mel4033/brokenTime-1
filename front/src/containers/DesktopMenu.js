import { connect } from 'react-redux';
import DesktopMenu from '../components/Header/DesktopMenu';

const mapState = (state) => ({
  isLogged: state.user.isLogged,
});

const mapDispatch = null;

export default connect(mapState, mapDispatch)(DesktopMenu);
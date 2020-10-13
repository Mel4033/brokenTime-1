import { connect } from 'react-redux';
import BurgerMenu from '../components/Header/BurgerMenu';

const mapState = (state) => ({
  isLogged: state.user.isLogged,
});

const mapDispatch = null;

export default connect(mapState, mapDispatch)(BurgerMenu);

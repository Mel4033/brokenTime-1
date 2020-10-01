import { connect } from 'react-redux';
import BurgerMenu from '../components/Header/BurgerMenu';
import { inputChange } from '../actions/burgerMenu';



export default connect(mapState, mapDispatch)(BurgerMenu);
import { connect } from 'react-redux';
import Profil from '../components/Profil';

// Notre Dumb-Component a-t-il besoin de données venant du State ?
const mapState = (state) => ({
  ownedFictions: state.user.currentUser.fictions,
  isLogged: state.user.isLogged,
  isLoading: state.user.isLoading,
});

// Notre Dumb-Component a-t-il besoin de Dispatcher des données ?
const mapDispatch = null;

// Renvoi du composant importé, cette fois-ci rendu "Smart".
export default connect(mapState, mapDispatch)(Profil);

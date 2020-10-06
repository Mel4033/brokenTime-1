import { connect } from 'react-redux';
import Profil from '../components/Profil';
import defaultImage from '../assets/images/usericon.png';

// Application d'une image de profil par défaut dans le cas
// où l'utilisateur possède une image de profil égale à null.
const defaultifyImage = (providedImage) => {
  if (providedImage === null) {
    return defaultImage;
  }
  return providedImage;
};

const mapState = (state) => ({
  userpicture: defaultifyImage(state.user.currentUser.picture),
  username: state.user.currentUser.pseudo,
  useremail: state.user.currentUser.email,
});

const mapDispatch = null;

export default connect(mapState, mapDispatch)(Profil);

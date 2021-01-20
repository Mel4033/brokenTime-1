import { connect } from 'react-redux';
import UserReadCard from '../components/Profil/UserCard/UserReadCard';

import { switchProfilDisplay } from '../actions/profilCard';

const defaultImage = 'https://discord.com/channels/776028256561397781/776028623555395634/777830947034497044';

// Application d'une image de profil par défaut dans le cas
// où l'utilisateur possède une image de profil égale à null.
const defaultifyImage = (providedImage) => {
  if (providedImage === null || providedImage === undefined || providedImage === '') {
    return defaultImage;
  }
  return providedImage;
};

const mapState = (state) => ({
  userpicture: defaultifyImage(state.user.currentUser.picture),
  username: state.user.currentUser.pseudo,
  useremail: state.user.currentUser.email,
});

const mapDispatch = (dispatch) => ({
  switchDisplay: () => {
    dispatch(switchProfilDisplay());
  },
});

export default connect(mapState, mapDispatch)(UserReadCard);

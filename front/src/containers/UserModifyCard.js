import { connect } from 'react-redux';
import UserModifyCard from '../components/Profil/UserCard/UserModifyCard';
import defaultImage from '../assets/images/usericon.png';

import { switchProfilDisplay } from '../actions/profilCard';
import { profileInputChange, submitModifiedProfile } from '../actions/user';

// Application d'une image de profil par défaut dans le cas
// où l'utilisateur possède une image de profil égale à null.
const defaultifyImage = (providedImage) => {
  if (providedImage === null || providedImage === undefined) {
    return defaultImage;
  }
  return providedImage;
};

// Notre composant a besoin de lire des données du state.
const mapState = (state) => ({
  userpicture: defaultifyImage(state.user.currentUser.picture),
  username: state.user.currentUser.pseudo,
  useremail: state.user.currentUser.email,
  userpassword: state.user.currentUser.password,
  userconfirmpassword: state.user.currentUser.confirmpassword,
  passwordsClasses: state.user.currentUser.confirmpassword === state.user.currentUser.password ? 'check' : 'times',
  checkUsername: state.user.currentUser.pseudo !== '' ? 'check' : 'times',
  checkEmail: state.user.currentUser.email !== '' ? 'check' : 'times',
});

// Notre composant a besoin d'interagir avec le state.
const mapDispatch = (dispatch) => ({
  submitModifiedProfile: () => {
    dispatch(submitModifiedProfile());
  },

  switchDisplay: () => {
    dispatch(switchProfilDisplay());
  },

  profileInputChange: (name, value) => {
    const object = {
      [name]: value,
    };
    dispatch(profileInputChange(object));
  },
});

export default connect(mapState, mapDispatch)(UserModifyCard);

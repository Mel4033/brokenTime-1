import { connect } from 'react-redux';
import UserModifyCard from '../components/Profil/UserCard/UserModifyCard';
import defaultImage from '../assets/images/usericon.png';

import { switchProfilDisplay } from '../actions/profilCard';
import { profilInputChange } from '../actions/user';

// Application d'une image de profil par défaut dans le cas
// où l'utilisateur possède une image de profil égale à null.
const defaultifyImage = (providedImage) => {
  if (providedImage === null || providedImage === undefined) {
    return defaultImage;
  }
  return providedImage;
};

const mapState = (state) => ({
  userpicture: defaultifyImage(state.user.currentUser.picture),
  username: state.user.currentUser.pseudo,
  useremail: state.user.currentUser.email,
  userpassword: state.user.currentUser.password,
  userconfirmpassword: state.user.currentUser.confirmpassword,
});

const mapDispatch = (dispatch) => ({
  switchDisplay: () => {
    dispatch(switchProfilDisplay());
  },
  profilInputChange: (name, value) => {
    console.log('truc');
    const object = {
      [name]: value,
    };
    dispatch(profilInputChange(object));
  },
});

export default connect(mapState, mapDispatch)(UserModifyCard);

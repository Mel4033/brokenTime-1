import { connect } from 'react-redux';
import UserCard from '../components/Profil/UserCard';

const mapState = (state) => ({
  readMode: state.profilCard.readMode,
});

const mapDispatch = null;

export default connect(mapState, mapDispatch)(UserCard);

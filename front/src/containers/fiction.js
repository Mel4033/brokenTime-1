import { connect } from 'react-redux';
import Fiction from '../components/Fiction';
import { submitChoice } from '../actions/fiction';

// Notre Dumb-Component a-t-il besoin de données venant du State ?
const mapState = (state) => ({
  messages: state.fiction.messages,
  choices: state.fiction.choices,
});

// Notre Dumb-Component a-t-il besoin de Dispatcher des données ?
const mapDispatch = (dispatch) => ({
  submitChoice: (pathToCall) => {
    dispatch(submitChoice(pathToCall));
  },
});

// Renvoi du composant importé, cette fois-ci rendu "Smart".
export default connect(mapState, mapDispatch)(Fiction);

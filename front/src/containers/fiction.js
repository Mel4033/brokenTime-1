import { connect } from 'react-redux';
import Fiction from '../components/Fiction';
import { submitChoice } from '../actions/fiction';

// Notre Dumb-Component a-t-il besoin de données venant du State ?
const mapState = (state) => ({
  isWriting: state.fiction.isWriting,
  choicesDisplayed: state.fiction.choicesDisplayed,
  messages: state.fiction.messages,
  choices: state.fiction.choices,
  playerPicture: state.user.currentUser.picture,
});

// Notre Dumb-Component a-t-il besoin de Dispatcher des données ?
const mapDispatch = (dispatch) => ({
  submitChoice: (pathToCall, choiceContent) => {
    const choiceObject = {
      pathToCall,
      choiceContent,
    };
    dispatch(submitChoice(choiceObject));
  },
});

// Renvoi du composant importé, cette fois-ci rendu "Smart".
export default connect(mapState, mapDispatch)(Fiction);

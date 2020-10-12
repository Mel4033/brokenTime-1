import { uuid as uuidv4 } from 'uuidv4';
import { SHOW_CHOICES, HIDE_CHOICES, RECEIVED_MESSAGE, SUBMIT_CHOICE, MESSAGE_LOADING, MESSAGE_NOTLOADING, RECEIVED_CHOICES } from '../actions/fiction';

const initialState = {
  choicesDisplayed: true,
  isWriting: false,
  messages: [],
  // Les choix de chemins qui s'offrent au joueur
  choices: [
    {
      id: uuidv4(),
      text: '[Rechercher une fréquence temporelle]',
      content: '[Recherche temporelle envoyée. Connexion établie avec succès.]',
      pathToCall: 1,
    },
  ],
};

const fiction = (state = initialState, action = {}) => {
  switch (action.type) {
    case SUBMIT_CHOICE: {
      return {
        ...state,
        messages: [...state.messages, {
          id: uuidv4(),
          author: 'Vous',
          content: action.payload.choiceContent,
        }],
        choicesDisplayed: false,
      };
    }
    case RECEIVED_CHOICES:
      return {
        ...state,
        choices: [...action.payload],
      };
    case RECEIVED_MESSAGE:
      console.log(action.payload);
      return {
        ...state,
        messages: [...state.messages, action.payload],
      };
    case MESSAGE_LOADING:
      return {
        ...state,
        isWriting: true,
      };
    case HIDE_CHOICES:
      console.log('Je dois cacher les choix');
      return {
        ...state,
        displayChoices: false,
      };
    case SHOW_CHOICES:
      console.log('Je dois afficher les choix');
      return {
        ...state,
        displayChoices: true,
      };
    case MESSAGE_NOTLOADING:
      return {
        ...state,
        isWriting: false,
      };
    default:
      return state;
  }
};

export default fiction;

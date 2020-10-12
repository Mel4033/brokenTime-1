import { uuid, uuid as uuidv4 } from 'uuidv4';
import { RECEIVED_MESSAGE, SUBMIT_CHOICE, MESSAGE_LOADING, MESSAGE_NOTLOADING, RECEIVED_CHOICES } from '../actions/fiction';
import { transformPathToChoices, transformPathToMessages } from '../functions/fictionFunctions';

const initialState = {
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

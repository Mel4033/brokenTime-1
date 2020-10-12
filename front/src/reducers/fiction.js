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
      content: '[Recherche temporelle envoyée. Connexion établie avec succès. Année de destination : 2612.]',
      pathToCall: 1,
    },
  ],
};

const fiction = (state = initialState, action = {}) => {
  switch (action.type) {
    case SUBMIT_CHOICE: {

      // Si tous les messages du protagoniste n'ont pas encore été affichés, l'envoi
      // de nouvelles requêtes de chemins est bloqué.
      if (!state.choicesDisplayed) { return state; }

      // Le premier message doit provenir du système. Dans ce cas, si le joueur initialise
      // l'histoire avec le premier appel de chemin, "Système" sera le premier envoyeur.
      if (action.payload.pathToCall === 1) {
        return {
          ...state,
          messages: [...state.messages, {
            id: uuidv4(),
            author: 'Système',
            content: action.payload.choiceContent,
            picture: 'https://media.discordapp.net/attachments/364094342953959424/765186494528094228/unknown.png',
          }],
        };
      }

      // Sinon, on renvoie le message lié au choix avec pour auteur le joueur.
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
    case HIDE_CHOICES:
      return {
        ...state,
        choicesDisplayed: false,
      };
    case SHOW_CHOICES:
      return {
        ...state,
        choicesDisplayed: true,
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

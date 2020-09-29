import { array } from 'prop-types';
import { uuid as uuidv4 } from 'uuidv4';
import { SUBMIT_CHOICE, RECEIVED_PATH } from '../actions/choice';

// TEST
import paths from './data';

const initialState = {
  messages: [
    {
      id: uuidv4(),
      author: 'Meadow',
      content: 'C\'est quoi ce bordel, pourquoi y\'a marqué "Connexion établie" ?',
    },
    {
      id: uuidv4(),
      author: 'Vous',
      content: 'Bonjour ?',
    },
    {
      id: uuidv4(),
      author: 'Meadow',
      content: 'Oh merde, ça répond en plus ce truc, qu\'est-ce qu\'il se passe ?',
    },
    {
      id: uuidv4(),
      author: 'Vous',
      content: 'Mon terminal m\'indique une connexion en 2612.',
    },
    {
      id: uuidv4(),
      author: 'Meadow',
      content: 'Hein ? Je comprends rien. Oui on est bien en 2612, et alors ? Vous êtes quoi au juste ?',
    },
    {
      id: uuidv4(),
      author: 'Vous',
      content: 'Attendez, 2612 ? Je ne suis pas sûr de comprendre...',
    },
    {
      id: uuidv4(),
      author: 'Meadow',
      content: 'Bon. Moi c\'est Meadow et euh... Je viens de trouver cette espèce de montre par terre, au milieu de toute cette explosion de paperasse.',
    },
    {
      id: uuidv4(),
      author: 'Meadow',
      content: 'On peut vraiment dire que là c\'est pas la joie.',
    },
  ],

  // Les choix de chemins qui s'offrent au joueur
  choices: [
    {
      id: uuidv4(),
      content: 'Le bon choix ici',
      pathToCall: '5',
    },
    {
      id: uuidv4(),
      content: 'Choix 2',
      pathToCall: '1054',
    },
  ],
};

const fiction = (state = initialState, action = {}) => {
  switch (action.type) {
    case SUBMIT_CHOICE:
      {
        console.log('Chemin à appeler :', action.pathToCall);
        const calledPathDatas = paths.find((pathObject) => pathObject.order === parseInt(action.pathToCall, 10));

        return {
          ...state,
          messages: [...state.messages, ...calledPathDatas.messages],
        };
      };
    case RECEIVED_PATH:
      // TODO - Réception et injection des données reçues.
      return state;
    default:
      return state;
  }
};

export default fiction;

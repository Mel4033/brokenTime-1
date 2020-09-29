import { call } from 'file-loader';
import { uuid as uuidv4 } from 'uuidv4';
import { SUBMIT_CHOICE, RECEIVED_PATH } from '../actions/choice';

// TEST
import paths from './data';

const initialState = {
  messages: [
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
      pathToCall: 1,
    },
    {
      id: uuidv4(),
      content: 'Choix 2',
      pathToCall: '1054',
    },
  ],
};

// Fonction de transformation des messages associés à un chemin en des messages
// exploitables par notre interface
const transformPathToMessages = (receivedPath) => {
  // Purification des messages reçus dans le chemin
  const purifiedMessages = receivedPath.message.map((messageObject) => ({
    id: uuidv4(),
    author: messageObject.byCharacter.name,
    content: messageObject.text,
    number: messageObject.number,
  }));

  // Réorganisation des messages selon leur propriété "number";
  return purifiedMessages.sort((a, b) => (a.number - b.number));
};


const fiction = (state = initialState, action = {}) => {
  switch (action.type) {
    case SUBMIT_CHOICE: {
      // Récupération du chemin souhaité.
      const calledPath = paths.find((pathObject) => pathObject.number === action.pathToCall);

      // Transformation du chemin en une liste de messages triés et exploitables.
      const allMessages = transformPathToMessages(calledPath);

      // Et insertion des messages dans le chat en direct.
      return {
        ...state,
        messages: [...state.messages, ...allMessages],
      };
    }
    case RECEIVED_PATH:
      // TODO - Réception et injection des données reçues.
      return state;
    default:
      return state;
  }
};

export default fiction;

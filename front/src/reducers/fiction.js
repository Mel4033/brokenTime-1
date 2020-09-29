import { uuid, uuid as uuidv4 } from 'uuidv4';
import { SUBMIT_CHOICE, RECEIVED_PATH } from '../actions/choice';

// TEST
import paths from './data';

const initialState = {
  messages: [
    {
      id: uuidv4(),
      author: '???',
      content: 'Hé ... Youhou ? Pourquoi ça note tout ce que je dis ce machin, hm ... Et c\'est quoi ça "Connexion établie" ?',
    },
  ],

  // Les choix de chemins qui s'offrent au joueur
  choices: [
    {
      id: uuidv4(),
      content: 'Bonjour... ?',
      pathToCall: 2,
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

const transformPathToChoices = (receivedPath) => {
  console.log(receivedPath.choice);

  const extractedChoices = receivedPath.choice.map((choiceObject) => ({
    id: uuidv4(),
    content: choiceObject.text,
    pathToCall: choiceObject.toPath,
  }));

  return extractedChoices;
};

const fiction = (state = initialState, action = {}) => {
  switch (action.type) {
    case SUBMIT_CHOICE: {
      // Récupération du chemin souhaité.
      const calledPath = paths.find((pathObject) => pathObject.number === action.pathToCall);

      // Transformation du chemin en une liste de messages triés et exploitables.
      const allMessages = transformPathToMessages(calledPath);
      const allChoices = transformPathToChoices(calledPath);
      console.log(allChoices);

      // Et insertion des messages dans le chat en direct.
      return {
        ...state,
        messages: [...state.messages, ...allMessages],
        choices: [...allChoices],
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

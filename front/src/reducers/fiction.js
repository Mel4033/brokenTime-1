import { uuid, uuid as uuidv4 } from 'uuidv4';
import { SUBMIT_CHOICE, RECEIVED_PATH, MESSAGE_LOADING, MESSAGE_NOTLOADING } from '../actions/fiction';

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
  console.log(receivedPath);
  const extractedChoices = receivedPath.choice.map((choiceObject) => ({
    id: uuidv4(),
    content: choiceObject.content,
    text: choiceObject.text,
    pathToCall: choiceObject.toPath,
  }));

  return extractedChoices;
};

const fiction = (state = initialState, action = {}) => {
  switch (action.type) {
    case SUBMIT_CHOICE: {
      console.log(action.payload);
      return {
        ...state,
        messages: [...state.messages, {
          id: uuidv4(),
          author: 'Vous',
          content: action.payload.choiceContent,
        }],
      };
    }
    case RECEIVED_PATH: {
      console.log(action.payload);
      const messagesToDisplay = transformPathToMessages(action.payload);
      const choicesToDisplay = transformPathToChoices(action.payload);
      console.log(messagesToDisplay);
      console.log(choicesToDisplay);
      return {
        ...state,
        messages: [...state.messages, ...messagesToDisplay],
        choices: [...choicesToDisplay],
      };
    }
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

// Importation des actions
import axios from 'axios';
import Cookie from 'universal-cookie';
import { SUBMIT_CHOICE, receivedMessage, receivedChoices, messageNotLoading, messageLoading, hideChoices, showChoices } from '../actions/fiction';
import { transformPathToChoices, transformPathToMessages } from '../functions/fictionFunctions';

const cookies = new Cookie();

const fictionMiddleware = (store) => (next) => (action) => {
  // En premier, on laisse passer l'action pour ne pas bloquer l'exécution du script.
  next(action);

  const progressiveDispatcher = (receivedPath) => {
    let iterate = 0;
    const allMessages = transformPathToMessages(receivedPath);
    const allChoices = transformPathToChoices(receivedPath);

    allMessages.forEach((messageObject) => {
      console.log(messageObject);
      iterate += 1;
      setTimeout(() => {
        store.dispatch(messageLoading());
      }, iterate * 1000);

      setTimeout(() => {
        store.dispatch(receivedMessage(messageObject));
      }, iterate * 3000);

      setTimeout(() => {
        store.dispatch(messageNotLoading());
        store.dispatch(showChoices());
        store.dispatch(receivedChoices(allChoices));
      }, allMessages.length * 3000);
    });
  };

  // Ensuite, on vérifie l'action qu'on a reçu pour y répondre correctement.
  switch (action.type) {
    default:
      break;
    case SUBMIT_CHOICE: {
      if (!store.getState().fiction.choicesDisplayed) { return; }
      store.dispatch(hideChoices());

      const { pathToCall } = action.payload;
      axios({
        method: 'get',
        url: `http://ec2-23-20-252-110.compute-1.amazonaws.com/api/fiction/la-montre-du-temps/path/${pathToCall}`,
        headers: {
          authorization: `Bearer ${cookies.get('token').token}`,
        },
      })
        .then((response) => {
          console.log(response.data);
          progressiveDispatcher(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
      break;
    }
  }
};

export default fictionMiddleware;

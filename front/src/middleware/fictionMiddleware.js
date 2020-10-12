// Importation des actions
import axios from 'axios';
import Cookie from 'universal-cookie';
import { SUBMIT_CHOICE, receivedMessage, receivedChoices, messageNotLoading, messageLoading } from '../actions/fiction';
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
      setTimeout(() => {
        store.dispatch(receivedMessage(messageObject));
      }, iterate * 1000);
      iterate += 1;
    });
    store.dispatch(receivedChoices(allChoices));
  };

  // Ensuite, on vérifie l'action qu'on a reçu pour y répondre correctement.
  switch (action.type) {
    default:
      break;
    case SUBMIT_CHOICE: {
      const { pathToCall } = action.payload;
      axios({
        method: 'get',
        url: `http://ec2-23-20-252-110.compute-1.amazonaws.com/api/fiction/la-montre-du-temps/path/${pathToCall}`,
        headers: {
          authorization: `Bearer ${cookies.get('token').token}`,
        },
      })
        .then((response) => {
          const messageLength = response.data.message[0].text.length;
          setTimeout(() => {
            store.dispatch(messageLoading());
          }, 0 * messageLength); // ! <------------ 20
          setTimeout(() => {
            progressiveDispatcher(response.data);
            // store.dispatch(receivedPath(response.data));
            store.dispatch(messageNotLoading());
          }, 0 * messageLength); // ! <------------ 50
        })
        .catch((error) => {
          console.log(error);
        });
      break;
    }
  }
};

export default fictionMiddleware;

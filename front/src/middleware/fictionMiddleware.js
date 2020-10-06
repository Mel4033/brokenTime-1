// Importation des actions
import axios from 'axios';
import Cookie from 'universal-cookie';
import { SUBMIT_CHOICE, receivedPath, messageNotLoading, messageLoading } from '../actions/fiction';

const cookies = new Cookie();

const fictionMiddleware = (store) => (next) => (action) => {
  // En premier, on laisse passer l'action pour ne pas bloquer l'exécution du script.
  next(action);

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
          }, 20 * messageLength);
          setTimeout(() => {
            store.dispatch(receivedPath(response.data));
            store.dispatch(messageNotLoading());
          }, 50 * messageLength);
        })
        .catch((error) => {
          console.log(error);
        });

      // ========================================
      axios({
        method: 'get',
        url: 'http://ec2-23-20-252-110.compute-1.amazonaws.com/api/user/details',
        headers: {
          authorization: `Bearer ${cookies.get('token').token}`,
        },
      })
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
      break;
    }
  }
};

export default fictionMiddleware;

import axios from 'axios';

// Importation des actions
import { LOGIN_SUBMIT, loginSucess, loginError } from '../actions/user';

const registerMiddleware = (store) => (next) => (action) => {
  // En premier, on laisse passer l'action pour ne pas bloquer l'exécution du script.
  next(action);

  // Ensuite, on vérifie l'action qu'on a reçu pour y répondre correctement.
  switch (action.type) {
    default:
      break;
    case LOGIN_SUBMIT:
      console.log('login submitted (loginMiddleware)');
      // TODO : Réaliser l'appel axios
      // Si le register réussi -> dispatch(registerSuccess());
      // Si le register échoue -> dispatch(registerError());
      console.log(store.getState().user);
      axios({
        method: 'get',
        url: 'https://swapi.dev/api/people/1/',
      })
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
      break;
  }
};

export default registerMiddleware;

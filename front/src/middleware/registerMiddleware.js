import axios from 'axios';

// Importation des actions
import { REGISTER_SUBMIT, registerSuccess, registerError } from '../actions/user';

const registerMiddleware = (store) => (next) => (action) => {
  // En premier, on laisse passer l'action pour ne pas bloquer l'exécution du script.
  next(action);

  // Ensuite, on vérifie l'action qu'on a reçu pour y répondre correctement.
  switch (action.type) {
    default:
      break;
    case REGISTER_SUBMIT:
      console.log('login submitted (loginMiddleware)');
      // TODO : Réaliser l'appel axios
      // Si le register réussi -> dispatch(registerSuccess());
      // Si le register échoue -> dispatch(registerError());

      axios({
        method: 'post',
        url: 'none',
        data: store.getState().user.formData,
      })
        .then((response) => {
          // dispatch(registerSuccess());
          console.log(response);
        })
        .catch((error) => {
          // dispatch(registerError());
          console.log(error);
        });
      break;
  }
};

export default registerMiddleware;

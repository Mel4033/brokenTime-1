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
    case LOGIN_SUBMIT: {
      console.log('login submitted (loginMiddleware)');
      // TODO : Réaliser l'appel axios
      // Si le login réussi -> dispatch(loginSuccess());
      // Si le login échoue -> dispatch(loginError());
      const data = {
        email: store.getState().user.formData.email,
        password: store.getState().user.formData.password,
      };

      axios({
        method: 'post',
        url: 'localhostmachinmachin.../api/loginform',
        data,
      })
        .then((response) => {
          // dispatch(loginSuccess());
          console.log(response);
        })
        .catch((error) => {
          // dispatch(loginError());
          console.log(error);
        });
      break;
    }
  }
};

export default registerMiddleware;

import axios from 'axios';

// Importation des actions
import { LOGIN_SUBMIT, loginSuccess, loginError, CHECK_AUTH } from '../actions/user';

const registerMiddleware = (store) => (next) => (action) => {
  // En premier, on laisse passer l'action pour ne pas bloquer l'exécution du script.
  next(action);

  // Ensuite, on vérifie l'action qu'on a reçu pour y répondre correctement.
  switch (action.type) {
    default:
      break;

    // On demande à l'API si l'utilisateur présent sur le site est déjà connecté ou non
    case CHECK_AUTH:
      axios({
        method: 'get',
        url: 'http://ec2-23-20-252-110.compute-1.amazonaws.com/api/user',
        // Il est nécessaire pour le serveur de connaître l'utilisateur, donc on utilise
        // le paramètre suivant.
        withCredentials: true,
      })
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
      break;

    // On reçois la demande de Login et on fait une demande de vérification vers l'API
    case LOGIN_SUBMIT: {
      console.log('login submitted (loginMiddleware)');
      // TODO : Réaliser l'appel axios
      // Si le login réussi -> dispatch(loginSuccess());
      // Si le login échoue -> dispatch(loginError());
      // const data = {
      //   email: store.getState().user.formData.email,
      //   password: store.getState().user.formData.password,
      // };

      axios({
        method: 'post',
        url: 'http://ec2-23-20-252-110.compute-1.amazonaws.com/api/login_check',
        data: {
          username: store.getState().user.formData.email,
          password: store.getState().user.formData.password,
        },
      })
        .then((response) => {
          store.dispatch(loginSuccess(response.data));
          console.log(response.data);
        })
        .catch((error) => {
          store.dispatch(loginError());
          console.log(error);
        });
      break;
    }
  }
};

export default registerMiddleware;

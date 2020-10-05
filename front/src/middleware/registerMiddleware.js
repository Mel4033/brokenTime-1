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
      // Si le register réussi -> dispatch(registerSuccess());
      // Si le register échoue -> dispatch(registerError());

      if (store.getState().user.formData.password === store.getState().user.formData.confirmpassword) {
        axios({
          method: 'post',
          url: 'http://ec2-23-20-252-110.compute-1.amazonaws.com/user/new',
          withCredentials: true,
          data: {
            pseudo: store.getState().user.formData.pseudo,
            email: store.getState().user.formData.email,
            password: store.getState().user.formData.password,
          },
        })
          .then((response) => {
            // dispatch(registerSuccess());
            console.log(response);
          })
          .catch((error) => {
            // dispatch(registerError());
            console.log(error);
          });
      }
      break;
  }
};

export default registerMiddleware;

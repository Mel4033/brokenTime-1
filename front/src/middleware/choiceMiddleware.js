// Importation des actions
import { SUBMIT_CHOICE } from '../actions/choice';

const logMiddleware = (store) => (next) => (action) => {
  // En premier, on laisse passer l'action pour ne pas bloquer l'exécution du script.
  next(action);

  // Ensuite, on vérifie l'action qu'on a reçu pour y répondre correctement.
  switch (action.type) {
    default:
      console.log('Default case choiceMiddleware');
      break;
  }
};

export default logMiddleware;

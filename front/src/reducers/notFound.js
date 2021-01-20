import { uuid as uuidv4 } from 'uuidv4';
import { NEXT_MESSAGE } from '../actions/notFound';

const initialState = {
  // La valeur de secretkey correspond au nombre de clicks nécessaires avant
  // l'apparition du message.
  messages: [
    {
      secretkey: 0,
      id: uuidv4(),
      string: 'Vos choix sont toujours décisifs.',
    },
    {
      secretkey: 1,
      id: uuidv4(),
      string: 'Rester ici n\'a jamais été une bonne idée.',
    },
    {
      secretkey: 2,
      id: uuidv4(),
      string: 'Vous pouvez à tout moment faire changer les choses.',
    },
    {
      secretkey: 3,
      id: uuidv4(),
      string: 'Renoncez à votre instinct.',
    },
    {
      secretkey: 4,
      id: uuidv4(),
      string: 'Ce n\'est pas comme ça que vous sauverez Meadow.',
    },
    {
      secretkey: 5,
      id: uuidv4(),
      string: 'Vous gaspillez votre temps sur des futilités.',
    },
    {
      secretkey: 10,
      id: uuidv4(),
      string: 'Pierre : "Vous êtes le maillon faible. Au revoir."',
    },
    {
      secretkey: 20,
      id: uuidv4(),
      string: 'Olivier : "Nan mais si tu parles de cardinalités en soirée mondaine, t\'es le roi de la nuit."',
    },
    {
      secretkey: 30,
      id: uuidv4(),
      string: 'Stéphane : "Je pense qu\'un peu de f0f irai vachement bien sur ces caméléons... Pas vous ?"',
    },
    {
      secretkey: 40,
      id: uuidv4(),
      string: 'Tony : "Alright !"',
    },
    {
      secretkey: 50,
      id: uuidv4(),
      string: 'Pierre : "BRAVO ARTHOUR !"',
    },
    {
      secretkey: 60,
      id: uuidv4(),
      string: 'Team Brokentime - Sprint 0 : "Euh... Par où on commence du coup ?"',
    },
    {
      secretkey: 80,
      id: uuidv4(),
      string: '[Spoiler] : Le projet Broken Time est né d\'une équipe de quatre personnes dans le cadre de l\'Apothéose de l\'école O\'Clock.',
    },
    {
      secretkey: 100,
      id: uuidv4(),
      string: '[Spoiler] : La promo Isengard d\'O\'Clock a eu comme Helper Saroumane le blanc. Aussi appelé Benji.',
    },
    {
      secretkey: 125,
      id: uuidv4(),
      string: '[Spoiler] : Le logo de Broken Time a été réalisé par l\'illustrateur Brice Claudon. Merci à lui ! https://bxc-art.fr/',
    },
    {
      secretkey: 150,
      id: uuidv4(),
      string: '[Spoiler] : Tony a eu droit à un total de 12 émojis de lui-même avec Isengard & Illiade réunis. En un mois.',
    },
    {
      secretkey: 200,
      id: uuidv4(),
      string: '[Spoiler] : Le scénario de "La montre du temps" a été rédigé mais n\'a pas pu être appliqué en entier. A la fin de cette fiction, Meadow (qui est la protagoniste principale de l\'histoire), fini par traverser une grande horloge qui la mène dans un univers différent du sien, au travers des époques et du temps.',
    },
    {
      secretkey: 3000,
      id: uuidv4(),
      string: 'T\'es tenace toi ... Bon bah je te laisse cliquer si c\'est ce que tu aimes faire.',
    },
  ],
  progressiveMessages: [
    {
      id: uuidv4(),
      string: '** Votre chemin prend fin ici. **',
    },
  ],
  counter: 0,
};

const notFound = (state = initialState, action = {}) => {
  switch (action.type) {
    default:
      return state;
    case NEXT_MESSAGE:
      // Si le nombre du counter correspond à une clé du state messages, on entre
      // dans cette condition.
      if (state.messages.find((messageObject) => (
        messageObject.secretkey === state.counter
      )) !== undefined) {
        // Placement de l'élément correspondant à la valeur du counter dans une variable.
        const messageToInsert = state.messages.find((messageObject) => (
          messageObject.secretkey === state.counter
        ));

        // Placement de la variable dans le state des messages progressifs.
        return {
          ...state,
          counter: state.counter + 1,
          progressiveMessages: [...state.progressiveMessages, messageToInsert],
        };
      }

      // Aucune correspondance précédemment rencontrée. On incrémente juste le counter.
      return {
        ...state,
        counter: state.counter + 1,
      };
  }
};

export default notFound;

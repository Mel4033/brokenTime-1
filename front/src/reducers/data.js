import { uuid as uuidv4 } from 'uuidv4';

// Les messages à afficher dans le chat en direct

const paths = [
  {
    order: 5,
    messages: [
      {
        id: uuidv4(),
        author: 'Meadow',
        content: 'Yoooo ! Te voilà sur un nouveau chemin !',
      },
      {
        id: uuidv4(),
        author: 'Meadow',
        content: 'Alors, content ?',
      },
      {
        id: uuidv4(),
        author: 'Vous',
        content: 'Nan mais tu déconnes ? Evidemment, vu comment J\'EN AI CHIER',
      },
    ],
    choices: [
      {
        id: uuidv4(),
        content: 'Et un nouveau choix !',
        pathToCall: '987546',
      },
      {
        id: uuidv4(),
        content: 'Et le second, de toute évidence.',
        pathToCall: '10',
      },
    ],
  },
];

const path = {
  name: 'chemin test 2',
  winPath: false,
  LosePath: false,
  number: 2,

  choice: [
    {
      text: 'choix 1',
      path: 3,
    },
    {
      text: 'choix 2',
      path: 4,
    },
  ],

  message: [
    {
      text: 'Je suis Meadow et voici le message 1',
      number: 1,
      lastMessage: false,
      byCharacter: {
        id: 1,
        name: 'Meadow',
        picture: null,
      },
    },
    {
      text: 'Je suis le joueur, message 2',
      number: 2,
      lastMessage: false,
      byCharacter: {
        id: 1,
        name: 'Vous',
        picture: null,
      },
    },
    {
      text: 'Meadow, message 3',
      number: 3,
      lastMessage: false,
      byCharacter: {
        id: 2,
        name: 'Vous',
        picture: null,
      },
    },
    {
      text: 'Joueur, message 4',
      number: 4,
      lastMessage: false,
      byCharacter: {
        id: 2,
        name: 'Vous',
        picture: null,
      },
    },
  ],
};

export default paths;

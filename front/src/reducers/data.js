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

export default paths;

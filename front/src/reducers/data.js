// Les messages à afficher dans le chat en direct

// const paths = [
//   {
//     order: 5,
//     messages: [
//       {
//         id: uuidv4(),
//         author: 'Meadow',
//         content: 'Yoooo ! Te voilà sur un nouveau chemin !',
//       },
//     ],
//     choices: [
//       {
//         id: uuidv4(),
//         content: 'Et un nouveau choix !',
//         pathToCall: '987546',
//       },
//       {
//         id: uuidv4(),
//         content: 'Et le second, de toute évidence.',
//         pathToCall: '10',
//       },
//     ],
//   },
// ];

const paths = [{
  name: 'chemin test 1',
  winPath: false,
  LosePath: false,
  number: 1,
  choice: [
    {
      text: 'choix1',
      toPath: 2,
    },
    {
      text: 'choix2',
      toPath: 1,
    },
  ],
  message: [
    {
      text: 'message 1 test persoTest',
      number: 1,
      lastMessage: false,
      byCharacter: {
        id: 1,
        name: 'perso test',
        picture: null,
      },
    },
    {
      text: 'message 2 persoTest',
      number: 3,
      lastMessage: false,
      byCharacter: {
        id: 1,
        name: 'perso test',
        picture: null,
      },
    },
    {
      text: 'message1 UserTest',
      number: 2,
      lastMessage: false,
      byCharacter: {
        id: 2,
        name: 'user test',
        picture: null,
      },
    },
    {
      text: 'message 2 userTest',
      number: 4,
      lastMessage: false,
      byCharacter: {
        id: 2,
        name: 'user test',
        picture: null,
      },
    },
  ],
}];

export default paths;

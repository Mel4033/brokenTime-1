// Les messages à afficher dans le chat en direct

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
      text: 'Message 1 - Meadow',
      number: 1,
      lastMessage: false,
      byCharacter: {
        id: 1,
        name: 'Meadow',
        picture: null,
      },
    },
    {
      text: 'Message 3 - Vous',
      number: 3,
      lastMessage: false,
      byCharacter: {
        id: 1,
        name: 'Vous',
        picture: null,
      },
    },
    {
      text: 'Message 2 - Meadow',
      number: 2,
      lastMessage: false,
      byCharacter: {
        id: 2,
        name: 'Meadow',
        picture: null,
      },
    },
    {
      text: 'Message 4 - Vous',
      number: 4,
      lastMessage: false,
      byCharacter: {
        id: 2,
        name: 'Vous',
        picture: null,
      },
    },
  ],
}];

export default paths;

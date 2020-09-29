// Les messages à afficher dans le chat en direct

const paths = [
  {
    name: 'chemin test 1',
    winPath: false,
    LosePath: false,
    number: 1,
    choice: [
      {
        text: 'Va vers la salle de bain',
        toPath: 2,
      },
      {
        text: 'Fonce dans la cuisine !',
        toPath: 1,
      },
    ],
    message: [
      {
        text: 'Quel désastre, me voilà tâchée de sang de la tête aux pieds...',
        number: 1,
        lastMessage: false,
        byCharacter: {
          id: 1,
          name: 'Meadow',
          picture: null,
        },
      },
      {
        text: 'Tu penses que je devrais nettoyer tout ça ?',
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

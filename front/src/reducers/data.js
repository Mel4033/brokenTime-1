// Les messages à afficher dans le chat en direct

const paths = [
  {
    name: 'Salut',
    winPath: false,
    LosePath: false,
    number: 2,
    message: [
      {
        text: 'Bonjour ... ? Y\'a quelqu\'un ?',
        number: 1,
        lastMessage: false,
        byCharacter: {
          id: 1,
          name: 'Vous',
          picture: null,
        },
      },
      {
        text: 'Oh merde, ça répond en plus ce truc. Qu\'est-ce qu\'il se passe ?',
        number: 2,
        lastMessage: false,
        byCharacter: {
          id: 1,
          name: 'Meadow',
          picture: null,
        },
      },
    ],

    choice: [
      {
        text: 'Aucune idée.',
        toPath: 3,
      },
      {
        text: 'Mon terminal m\'indique une connexion en 2612.',
        toPath: 4,
      },
    ],
  },

  {
    name: 'Aucune idée',
    winPath: false,
    LosePath: false,
    number: 3,
    message: [
      {
        text: 'Aucune idée. Je me suis retrouvé connecté à ... Vous apparemment.',
        number: 1,
        lastMessage: false,
        byCharacter: {
          id: 1,
          name: 'Vous',
          picture: null,
        },
      },
      {
        text: 'D\'accord mais ... C\'est quoi ce truc au juste ? Pourquoi ma voix se retrouve sur un écran ? Elle est bizarre cette montre.',
        number: 2,
        lastMessage: false,
        byCharacter: {
          id: 1,
          name: 'Meadow',
          picture: null,
        },
      },
    ],

    choice: [
      {
        text: 'Une montre ?',
        toPath: 5,
      },
      {
        text: 'Je pense en savoir autant que vous. C\'est à dire rien du tout.',
        toPath: 5,
      },
    ],
  },

  {
    name: 'Terminal',
    winPath: false,
    LosePath: false,
    number: 4,
    message: [
      {
        text: 'Mon terminal me dit être connecté en 2612. Je crois il doit déconner, encore une fois.',
        number: 1,
        lastMessage: false,
        byCharacter: {
          id: 1,
          name: 'Vous',
          picture: null,
        },
      },
      {
        text: 'Pourquoi il déconnerait ? Notre époque ne va quand même pas changer du jour au lendemain, ahah !',
        number: 2,
        lastMessage: false,
        byCharacter: {
          id: 1,
          name: 'Meadow',
          picture: null,
        },
      },
    ],

    choice: [
      {
        text: 'Attendez. 2612 ? Ca fait un sacré bond temporel tout ça ! Vous êtes qui ?',
        toPath: 5,
      },
      {
        text: 'Vous ne croyez pas si bien dire ...',
        toPath: 5,
      },
    ],
  },
];

export default paths;

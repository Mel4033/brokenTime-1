const initialState = [
  {
    title: ' Titre de fiction 1 ',
    resume: 'Je vais ici vous faire un court résumé  de la fiction que nous allons essayer de vous vendre très chère pour ne  plus avoir a travailler par la suite et se la couler douce en vacances.1',
    locked: true,
  },
  {
    title: ' Titre de fiction 2 ',
    resume: 'Je vais ici vous faire un court résumé  de la fiction que nous allons essayer de vous vendre très chère pour ne  plus avoir a travailler par la suite et se la couler douce en vacances.2',
    locked: true,
  },
  {
    title: ' Titre de fiction 3 ',
    resume: 'Je vais ici vous faire un court résumé  de la fiction que nous allons essayer de vous vendre très chère pour ne  plus avoir a travailler par la suite et se la couler douce en vacances.3',
    locked: false,
  },
  {
    title: ' Titre de fiction 4 ',
    resume: 'Je vais ici vous faire un court résumé  de la fiction que nous allons essayer de vous vendre très chère pour ne  plus avoir a travailler par la suite et se la couler douce en vacances.4',
    locked: false,
  },
  {
    title: ' Titre de fiction 5 ',
    resume: 'Je vais ici vous faire un court résumé  de la fiction que nous allons essayer de vous vendre très chère pour ne  plus avoir a travailler par la suite et se la couler douce en vacances.5',
    locked: false,
  },
  {
    title: ' Titre de fiction 6 ',
    resume: 'Je vais ici vous faire un court résumé  de la fiction que nous allons essayer de vous vendre très chère pour ne  plus avoir a travailler par la suite et se la couler douce en vacances.6',
    locked: false,
  },
  {
    title: ' Titre de fiction 7 ',
    resume: 'Je vais ici vous faire un court résumé  de la fiction que nous allons essayer de vous vendre très chère pour ne  plus avoir a travailler par la suite et se la couler douce en vacances.7',
    locked: false,
  },
];

const cards = (state = initialState, action = {}) => {
  switch (action.type) {
    default:
      return state;
  }
};
// ! /!\ L'export par défaut a sauté, faire un nouveau fichier ou modifier l'import à partir du fichier d'appel /!\
export { cards };

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

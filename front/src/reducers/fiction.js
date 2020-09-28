const initialState = {
  // Les messages à afficher dans le chat en direct
  messages: [
    {
      author: 'Meadow',
      content: 'C\'est quoi ce bordel, pourquoi y\'a marqué "Connexion établie" ?',
    },
    {
      author: 'Vous',
      content: 'Bonjour ?',
    },
    {
      author: 'Meadow',
      content: 'Oh merde, ça répond en plus ce truc, qu\'est-ce qu\'il se passe ?',
    },
    {
      author: 'Vous',
      content: 'Mon terminal m\'indique une connexion en 2612.',
    },
    {
      author: 'Meadow',
      content: 'Hein ? Je comprends rien. Oui on est bien en 2612, et alors ? Vous êtes quoi au juste ?',
    },
    {
      author: 'Vous',
      content: 'Attendez, 2612 ? Je ne suis pas sûr de comprendre...',
    },
    {
      author: 'Vous',
      content: 'Bon. Moi c\'est Meadow et euh... Je viens de trouver cette espèce de montre par terre, au milieu de toute cette explosion de paperasse.',
    },
  ],

  // Les choix de chemins qui s'offrent au joueur
  choices: [
    {
      content: 'Choix 1',
      pathToCall: '5482',
    },
    {
      content: 'Choix 2',
      pathToCall: '1054',
    },
  ],
};

const fiction = (state = initialState, action = {}) => {
  switch (action.type) {
    default:
      console.log('Je suis dans le reducer');
      return state;
  }
};

export default fiction;

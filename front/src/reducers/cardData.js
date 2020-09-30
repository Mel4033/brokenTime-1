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

export default cards;

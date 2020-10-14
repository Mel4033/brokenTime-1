import { expect } from 'chai';
import { transformPathToMessages } from '../../src/functions/fictionFunctions';

expect();

const fakeData = {
  LosePath: false,
  choice: [
    {
      text: 'Hello',
      toPath: 2,
      content: 'HelloContent',
    },
    {
      text: 'How are you ?',
      toPath: 1,
      content: 'How are you today ?',
    },
  ],
  fiction: [],
  message: [
    {
      text: 'Hello to you too',
      number: 1,
      lastMessage: false,
      byCharacter: {
        id: 1,
        name: 'Meadow',
        picture: 'protagonistPicture',
      },
    },
    {
      text: 'How are you ?',
      number: 2,
      lastMessage: false,
      byCharacter: {
        id: 1,
        name: 'Meadow',
        picture: 'protagonistPicture',
      },
    },
    {
      text: 'It\'s a good day to have a good day.',
      number: 3,
      lastMessage: false,
      byCharacter: {
        id: 1,
        name: 'Meadow',
        picture: 'protagonistPicture',
      },
    },
  ],
};

// describe('Serial tests of transformPathToMessages function', () => {
//   it('Should ')
// });

// Import de librairie
import { expect } from 'chai';

// Import de fonction requise
import { transformPathToMessages } from '../../src/functions/fictionFunctions';

// Initialisation de expect
expect();

// Mise en place de fausses données pour les tests
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
      text: 'Hello currentUser !',
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
        name: 'Système',
        picture: 'systemPicture',
      },
    },
  ],
};

// Description et réalisation des tests
describe('Serial tests of transformPathToMessages function', () => {
  it('Should return an array', () => {
    expect(transformPathToMessages(fakeData)).to.be.an('array');
  });

  it('Should return an array sorted by property "number"', () => {
    expect(transformPathToMessages(fakeData)[0].number).to.deep.equal(1);
    expect(transformPathToMessages(fakeData)[1].number).to.deep.equal(2);
    expect(transformPathToMessages(fakeData)[2].number).to.deep.equal(3);
    expect(transformPathToMessages(fakeData)[0].content).to.deep.equal('Hello undefined !');
  });

  it('Should replace "currentUser" by provided nickname', () => {
    const myNickName = 'Jean-Paul';
    expect(transformPathToMessages(fakeData, myNickName)[0].content).to.deep.equal('Hello Jean-Paul !');
  });

  it('Should display correct author name', () => {
    expect(transformPathToMessages(fakeData)[0].author).to.deep.equal('Meadow');
    expect(transformPathToMessages(fakeData)[1].author).to.deep.equal('Meadow');
    expect(transformPathToMessages(fakeData)[2].author).to.deep.equal('Système');
  });

  it('Should display correct author picture', () => {
    expect(transformPathToMessages(fakeData)[0].picture).to.deep.equal('protagonistPicture');
    expect(transformPathToMessages(fakeData)[1].picture).to.deep.equal('protagonistPicture');
    expect(transformPathToMessages(fakeData)[2].picture).to.deep.equal('systemPicture');
  });

  it('All messages should have 5 strict keys', () => {
    transformPathToMessages(fakeData).forEach((dataObject) => {
      expect(dataObject).to.have.all.keys('id', 'author', 'content', 'picture', 'number');
    });
  });

  it('All messages should not contain empty keys', () => {
    transformPathToMessages(fakeData).forEach((dataObject) => {
      expect(dataObject.id).to.have.not.lengthOf(0);
      expect(dataObject.author).to.have.not.lengthOf(0);
      expect(dataObject.content).to.have.not.lengthOf(0);
      expect(dataObject.picture).to.have.not.lengthOf(0);
      expect(dataObject.number).to.be.not.equal(0);
    });
  });

  it('Should return undefined if no parameters provided', () => {
    expect(transformPathToMessages()).to.be.deep.equal(undefined);
  });
});

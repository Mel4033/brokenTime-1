// Import de librairies
import React from 'react';
import { Switch } from 'react-router-dom';
import { shallow } from 'enzyme';
import { expect, should } from 'chai';

// Import des composants requis pour les tests
import Header from 'src/components/Header';
import App from 'src/components/App';

// Initialisation de should()
should();

// Description et réalisation des tests
describe('Série de tests : App', () => {
  const comp = shallow(<App />);
  it('should have a <Header /> component', () => {
    expect(comp.find(Header)).to.have.length(1);
  });

  it('Should have a <Switch> component', () => {
    expect(comp.find(Switch)).to.have.length(1);
  });
});

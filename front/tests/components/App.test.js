// Import de librairies
import React, { useEffect } from 'react';
import { Switch } from 'react-router-dom';
import { shallow } from 'enzyme';
import { expect, should } from 'chai';

// Import des composants requis pour les tests
import Header from 'src/components/Header';
import Contact from 'src/components/Contact';
import TeamPage from 'src/components/TeamPage';
import Footer from 'src/components/Footer';
import Library from 'src/containers/Library';
import App from 'src/components/App';


// Initialisation de should()
should();

// Description et réalisation des tests
describe('Série de tests : App', () => {
  const comp = shallow(<App />);

  // here we have to parenthesize the number of iterations we want to find

  it('should have a <Header /> component', () => {
    expect(comp.find(Header)).to.have.length(1);
  });

  it('should have a <Contact /> component', () => {
    expect(comp.find(Contact)).to.have.length(1);
  });

  it('should have a <TeamPage /> component', () => {
    expect(comp.find(TeamPage)).to.have.length(1);
  });

  it('should have a <Footer /> component', () => {
    expect(comp.find(Footer)).to.have.length(5);
  });

  it('should have a <Library /> component', () => {
    expect(comp.find(Library)).to.have.length(1);
  });

  it('Should have a <Switch> component', () => {
    expect(comp.find(Switch)).to.have.length(1);
  });

  it('Should be a function', () => {
    expect(App).to.be.a('function');
  });

  it('Should be a function', () => {
    expect(useEffect).to.be.a('function');
  });

});

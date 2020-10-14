import { expect } from 'chai';
import classToApply from '../../src/functions/messagesFunctions';

expect();

describe('Serial test of classToApply function', () => {
  it('Should be a function', () => {
    expect(classToApply).to.be.a('function');
  });

  it('Should return an empty string if called without parameters or if called with a bad string', () => {
    const badString = 'someString';
    expect(classToApply(badString)).to.deep.equal('');
  });

  it('Should return a "protagonist" when "Meadow" is provided', () => {
    const goodString = 'Meadow';
    expect(classToApply(goodString)).to.deep.equal('protagonist');
  });

  it('Should return "player" when called with "Vous"', () => {
    const goodString = 'Vous';
    expect(classToApply(goodString)).to.deep.equal('player');
  });

  it('Should return "system" when "Système" is provided', () => {
    const goodString = 'Système';
    expect(classToApply(goodString)).to.deep.equal('system');
  });
});

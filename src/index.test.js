import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import store from './store';
import FootballPlayers from './containers/FootballPlayers';

describe('FootballPlayers', () => {
  it('does not crash', () => {
    shallow(<Provider store={store}><FootballPlayers/></Provider>);
  });
});

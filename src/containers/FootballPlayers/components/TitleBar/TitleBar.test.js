import React from 'react';
import TitleBar from './index';
import { shallow } from 'enzyme';

describe('TitleBar test', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<TitleBar>Foo bar</TitleBar>);
  });

  describe('render title bar component', () => {
    let span;

    beforeEach(() => {
      span = wrapper.find('span');
    });

    it('should render a span component', () => {
      expect(span).toHaveLength(1);
    });
    
    describe('span inner', () => {
      
      it('should have Test Title as text', () => {
        expect(span.text()).toEqual('Foo bar');
      });
    });
  })
});

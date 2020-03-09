import React from 'react';
import { shallow } from 'enzyme';
import QuestFour from './QuestFour';

describe('QuestFour Component', () => {
  it('should have a button for users click next after selecting favorite coding lang', () => {
    const component = shallow(<QuestFour />);
    expect(component.find('.next-button').length).toEqual(1);
  });

  it('should have a 9 icons for users click with class name .codingIcon', () => {
    const component = shallow(<QuestFour />);
    expect(component.find('.codingIcon').length).toEqual(9);
  });
});

export default QuestFour;

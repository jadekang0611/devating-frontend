import React from 'react';
import { shallow } from 'enzyme';
import QuestThree from './QuestThree';

describe('QuestThree Component', () => {
  it('should have a button for users click next after selecting gender interest', () => {
    const component = shallow(<QuestThree />);
    expect(component.find('.next-button').length).toEqual(1);
  });

  it('should have a 6 icons for users click with class name .activitiesIcon', () => {
    const component = shallow(<QuestThree />);
    expect(component.find('.activitiesIcon').length).toEqual(6);
  });
});

export default QuestThree;

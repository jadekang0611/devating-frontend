import React from 'react';
import { shallow } from 'enzyme';
import QuestOne from './QuestOne';

describe('QuestOne Component', () => {
  it('should have a button for users click next after selecting own gender', () => {
    const component = shallow(<QuestOne />);
    expect(component.find('.next-button').length).toEqual(1);
  });
});

export default QuestOne;

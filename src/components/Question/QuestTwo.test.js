import React from 'react';
import { shallow } from 'enzyme';
import QuestTwo from './QuestTwo';

describe('QuestTwo Component', () => {

    it('should have a button for users click next after selecting gender interest', () => {
        const component = shallow(<QuestTwo />);
        expect(component.find('.next-button').length).toEqual(1);
    });
});

export default QuestTwo;
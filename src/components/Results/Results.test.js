import React from 'react';
import { shallow } from 'enzyme';
import Results from './Results';

describe('Results Component', () => {

    it('should have a button for users to keep their match with class name match-button1', () => {
        const component = shallow(<Results />);
        expect(component.find('.match-button1').length).toEqual(2);
    });
});

export default Results;
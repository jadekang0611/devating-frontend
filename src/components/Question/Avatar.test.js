import React from 'react';
import { shallow } from 'enzyme';
import Avatar from './Avatar';

describe('Avatar Component', () => {

    it('should have a button for users click next after selecting avatar image', () => {
        const component = shallow(<Avatar />);
        expect(component.find('.next-button').length).toEqual(1);
    });
});

export default Avatar;
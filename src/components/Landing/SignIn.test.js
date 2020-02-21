import React from 'react';
import { shallow } from 'enzyme';
import SignIn from './SignIn';

describe('SignIn Component', () => {

    it('should have a button on signIn component for users to log in', () => {
        const component = shallow(<SignIn />);
        expect(component.find('button').length).toEqual(1);
    });
});

export default SignIn;
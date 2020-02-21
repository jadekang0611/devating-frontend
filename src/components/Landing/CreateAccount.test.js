import React from 'react';
import { shallow } from 'enzyme';
import CreateAccount from './CreateAccount';

describe('CreateAccount Component', () => {

    it('should have a button on create account component for sign up', () => {
        const component = shallow(<CreateAccount />);
        expect(component.find('button').length).toEqual(1);
    });
});

export default CreateAccount;
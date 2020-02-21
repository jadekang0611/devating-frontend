import React from 'react';
import { shallow } from 'enzyme';
import Home from './Home';

describe('Home Component', () => {

    it('should have two buttons on page', () => {
        const component = shallow(<Home />);
        expect(component.find('button').length).toEqual(2);
    });

    it('should render a button to create account as first button', () => {
        const component = shallow(<Home />);
        expect(component.find('button').first().text()).toEqual('create account');
    });
});

export default Home;

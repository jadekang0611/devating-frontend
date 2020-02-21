import React from 'react';
import { shallow } from 'enzyme';
import Dashboard from './Dashboard';

describe('Dashboard Component', () => {

    it('should have button with class .name-button', () => {
        const component = shallow(<Dashboard />);
        expect(component.find('.name-button').length).toEqual(1);
    });

    it('should have button with class .name-save-button', () => {
        const component = shallow(<Dashboard />);
        expect(component.find('name-save-button').length).toEqual(1);
    });
});

export default Dashboard;
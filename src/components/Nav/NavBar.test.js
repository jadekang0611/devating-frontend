import React from 'react';
import { shallow } from 'enzyme';
import NavBar from './NavBar';

describe('NavBar Component', () => {
  it('should have four nav items with class name = items', () => {
    const component = shallow(<NavBar />);
    expect(component.find('.items').length).toEqual(4);
  });
});

export default NavBar;

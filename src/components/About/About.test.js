import React from 'react';
import { shallow } from 'enzyme';
import About from './About';

// I noticed that there's some inconsistent indentation (i.e. 2 spaces versus 4 spaces) throughout your codebase.
describe('About Component', () => {
  it('should have a header that says We love what we do', () => {
    const component = shallow(<About />);
    expect(component.contains(<h2>We love what we do</h2>)).toBe(true);
  });

  it('should have a header that says Founder', () => {
    const component = shallow(<About />);
    expect(component.contains(<h2>Founders</h2>)).toBe(true);
  });
});

export default About;

// remove link below
//https://airbnb.io/enzyme/

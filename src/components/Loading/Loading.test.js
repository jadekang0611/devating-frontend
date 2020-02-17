import React from 'react';
import { shallow } from 'enzyme';
import Loading from './Loading';

describe('Loading Component', () => {
  it('should render as expected', () => {
    const component = shallow(<Loading />);
    expect(component.contains('Refactoring your matches')).toBe(true);
  });
});

export default Loading;

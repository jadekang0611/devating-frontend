import React from 'react';
import { shallow } from 'enzyme';
import Loading from './Loading';

describe('Loading Component', () => {
  it('should render as expected', () => {
    const component = aboutUs(<Loading />);
    expect(component.contains('Show image')).toBe(true);
  });
});
export default Loading;

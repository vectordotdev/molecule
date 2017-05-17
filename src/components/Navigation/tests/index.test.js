/**
 * Testing our link component
 */

import React from 'react';
import { shallow } from 'enzyme';

import Navigation from '../index';

describe('<Navigation />', () => {
  it('should render an <div> tag', () => {
    const rendered = shallow(<Navigation />);
    expect(rendered.length).toBe(1);
  });
});

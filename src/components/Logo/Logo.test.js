import renderer from 'react-test-renderer';
import React from 'react'
import Logo from './index'

test('Logo renders correctly', () => {
    const tree = renderer
        .create(<Logo />)
        .toJSON();
    expect(tree).toMatchSnapshot();
  });
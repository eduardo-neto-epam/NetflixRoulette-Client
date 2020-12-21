import renderer from 'react-test-renderer';
import React from 'react'
import Header from './index'

test('Header renders correctly', () => {
    const tree = renderer
        .create(<Header />)
        .toJSON();
    expect(tree).toMatchSnapshot();
  });
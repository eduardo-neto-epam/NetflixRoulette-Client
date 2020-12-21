import renderer from 'react-test-renderer';
import React from 'react'
import Heading from './index'

test('Heading renders correctly', () => {
    const children = 'FIND YOUR MOVIE'
    const tree = renderer
        .create(<Heading>{ children }</Heading>)
        .toJSON();
    expect(tree).toMatchSnapshot();
  });
  
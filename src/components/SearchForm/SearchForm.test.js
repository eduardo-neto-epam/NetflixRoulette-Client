import renderer from 'react-test-renderer';
import React from 'react'
import SearchForm from './index'

test('SearchForm renders correctly', () => {
    const tree = renderer
        .create(<SearchForm />)
        .toJSON();
    expect(tree).toMatchSnapshot();
  });
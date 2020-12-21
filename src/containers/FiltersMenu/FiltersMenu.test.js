import React from 'react'
import '@testing-library/react'
import renderer from 'react-test-renderer';
import FiltersMenu from './index'

let container;

beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  document.body.removeChild(container);
  container = null;
});

test('FiltersMenu renders correctly', () => {
    const tree = renderer
        .create(<FiltersMenu />)
        .toJSON();
    expect(tree).toMatchSnapshot();
  });

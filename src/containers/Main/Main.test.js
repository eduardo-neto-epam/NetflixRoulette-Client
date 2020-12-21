import React from 'react'
import '@testing-library/react'
import renderer from 'react-test-renderer';
import Main from './index'

let container;

beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  document.body.removeChild(container);
  container = null;
});

test('Main renders correctly', () => {
    const tree = renderer
        .create(<Main />)
        .toJSON();
    expect(tree).toMatchSnapshot();
  });
import React from 'react'
import '@testing-library/react'
import renderer from 'react-test-renderer';
import HeaderBanner from './index'

let container;

beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  document.body.removeChild(container);
  container = null;
});

test('HeaderBanner renders correctly', () => {
    const tree = renderer
        .create(<HeaderBanner />)
        .toJSON();
    expect(tree).toMatchSnapshot();
  });
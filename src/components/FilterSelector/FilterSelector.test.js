import '@testing-library/react'
import renderer from 'react-test-renderer';
import React from 'react'
import ReactDOM  from 'react-dom'
import { act } from 'react-dom/test-utils';
import { fireEvent, cleanup } from '@testing-library/react';
import FilterSelector from './index'

let container;

beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  document.body.removeChild(container);
  container = null;
});

afterEach(cleanup);

test('FilterSelector renders correctly', ()=>{
  const tree = renderer
    .create(<FilterSelector>Filter</FilterSelector>)
    .toJSON();
  expect(tree).toMatchSnapshot();
})

test('FilterSelector renders with text given as child', () => {

    const label = 'Test Filter'

    act(() => { ReactDOM.render(<FilterSelector>{label}</FilterSelector>, container) });

    const filter = container.querySelector('label');

    expect(filter.textContent).toBe(label)
})

test('simulates click', () => {

  const label = 'Test Filter'

  const mockedClick = jest.fn()

  function testClick() {

    act(() => { ReactDOM.render(<FilterSelector handleSelect={mockedClick}>{label}</FilterSelector>, container) });

    let input = container.querySelector('input');

    fireEvent.click(input);

    expect(mockedClick.mock.calls.length).toEqual(1)

  }

  testClick();

})

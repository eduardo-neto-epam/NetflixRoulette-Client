import '@testing-library/react'
import renderer from 'react-test-renderer';
import React from 'react'
import ReactDOM  from 'react-dom'
import { act } from 'react-dom/test-utils';
import Button from './index'
import { fireEvent } from '@testing-library/react';

let container;

beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  document.body.removeChild(container);
  container = null;
});

test('Button renders correctly', ()=>{
  const tree = renderer
    .create(<Button size='lg' style='glass'>+ ADD MOVIE</Button>)
    .toJSON();
  expect(tree).toMatchSnapshot();
})

test('button renders with text given as child', () => {

    const label = 'Click Me'

    act(() => { ReactDOM.render(<Button>{label}</Button>, container) });

    const btn = container.querySelector('button');

    expect(btn.textContent).toBe(label)
})

test('button takes class according to size props', () => {

  const sizeValues = [ 'sm', 'md', 'lg' ]
  
  function testSize(item) {
    act(() => { ReactDOM.render(<Button size={item}></Button>, container) });

    let btn = container.querySelector('button');

    expect(btn.getAttribute('class')).toMatch(`btn btn--${item} btn--primary`);
  }
  
  sizeValues.forEach(testSize)

})
test('button takes class according to style props', () => {

  const styleValues = [ 'primary', 'outline', 'glass' ]
  
  function testStyle(item) {
    act(() => { ReactDOM.render(<Button style={item}></Button>, container) });

    let btn = container.querySelector('button');

    expect(btn.getAttribute('class')).toMatch(`btn btn--md btn--${item}`);
  }
  
  styleValues.forEach(testStyle)

})

test('simulates click', () => {

  const mockedClick = jest.fn()

  function testClick() {

    act(() => { ReactDOM.render(<Button handleClick={mockedClick}></Button>, container) });

    let btn = container.querySelector('button');

    fireEvent.click(btn);

    expect(mockedClick.mock.calls.length).toEqual(1)

  }

  testClick();

})

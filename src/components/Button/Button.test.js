import '@testing-library/react'
import React from 'react'
import ReactDOM  from 'react-dom'
import { act } from 'react-dom/test-utils';
import Button from './index'

let container;

beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  document.body.removeChild(container);
  container = null;
});

test('button label renders according to prop', () => {

    const label = 'Click Me'

    act(() => { ReactDOM.render(<Button>{label}</Button>, container) });

    const btn = container.querySelector('button');

    expect(btn.textContent).toBe(label)
})

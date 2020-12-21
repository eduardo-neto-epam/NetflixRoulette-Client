import React from 'react'
import ReactDOM  from 'react-dom'
import '@testing-library/react'
import renderer from 'react-test-renderer';
import { act } from 'react-dom/test-utils';
import { fireEvent, render, cleanup } from '@testing-library/react';
import SortSelector from './index'

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

test('SortSelector renders correctly', () => {
    const tree = renderer
        .create(<SortSelector />)
        .toJSON();
    expect(tree).toMatchSnapshot();
  });


test('toggles options menu on click', () => {

function testClick() {
    act(() => { ReactDOM.render(<SortSelector />, container) });

    let clickableElement = container.querySelector('.selected-method');
    let displayedElement = container.querySelector('.options-container')

    fireEvent.click(clickableElement)
    expect(displayedElement.getAttribute('class')).toEqual('options-container options-container--show');

    fireEvent.click(clickableElement)
    expect(displayedElement.getAttribute('class')).toEqual('options-container');
    }
    
    testClick();
})

test('Option is selected when clicked', () => {

    function testClick() {
        const { getByTestId, getByText } = render(<SortSelector />);
    
        let clickableElement = getByText('movie title')
        let displayedElement = getByTestId('selected-method')
    
        fireEvent.click(clickableElement)
        expect(displayedElement.textContent).toEqual(clickableElement.textContent);
        }

    testClick();
})
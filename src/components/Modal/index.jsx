/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import ReactDOM from 'react-dom';
import styled, { keyframes } from 'styled-components';

export default function Modal({ onClose, children, ...props }) {
  const modalNode = document.getElementById('modal');

  return modalNode
    ? ReactDOM.createPortal(
      <Container>
        <Overlay>
          <Dialog {...props}>
            <Button onClick={onClose}>X</Button>
            {children}
          </Dialog>
        </Overlay>
      </Container>,
      modalNode,
    )
    : null;
}

const fadeIn = keyframes`from { opacity: 0; }`;

const Container = styled.div`
  position: relative;
  z-index: 100;
`;

const Overlay = styled.div`
  animation: ${fadeIn} 200ms ease-out;
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.7);
`;

const Dialog = styled.div`
  background: var(--color-dark);
  border-radius: 5px;
  padding: 20px;
  position: absolute;
  top: 20%;
  left: 50%;
  width: 50%;
  transform: translate(-50%);
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const Button = styled.button`
  border: none;
  background: transparent;
  color: var(--color-contrast);
  font-family: var(--font-main);
  font-size: 24px;
  font-weight: 500;
  display: flex;
  align-content: flex-end;
  cursor: pointer;
`;

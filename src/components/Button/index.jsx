/* eslint-disable linebreak-style */
import React from 'react';
import classnames from 'classnames/bind';
import PropTypes from 'prop-types';
import styles from './Button.module.scss';

const cx = classnames.bind(styles);

const Button = ({
  children, size, btnStyle, type, handleClick,
}) => (
  <button
    type={type === 'submit' ? 'submit' : 'button'}
    onClick={handleClick}
    className={cx(
      'btn',
      { 'btn--lg': size === 'lg' },
      { 'btn--md': size === 'md' },
      { 'btn--sm': size === 'sm' },
      { 'btn--primary': btnStyle === 'primary' },
      { 'btn--outline': btnStyle === 'outline' },
      { 'btn--glass': btnStyle === 'glass' },
      { 'btn--disabled': btnStyle === 'disabled' },
    )}
  >
    {children}
  </button>
);

Button.propTypes = {
  children: PropTypes.string,
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  btnStyle: PropTypes.oneOf(['primary', 'glass', 'outline', 'disabled']),
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  handleClick: PropTypes.func,
};

Button.defaultProps = {
  children: 'LABEL',
  size: 'md',
  btnStyle: 'primary',
  type: 'button',
  handleClick: (e) => {
    if (e.target.getAttribute('type') === 'button') {
      // eslint-disable-next-line no-console
      console.error('handleClick function must be passed as props from parent into Button');
    } else {
      // eslint-disable-next-line no-console
      console.log('Button was clicked');
    }
  },
};

export default Button;

import React from 'react'
import styles from './Button.module.scss'
import classnames from 'classnames/bind'
import PropTypes from 'prop-types';

let cx = classnames.bind(styles)

const Button = ({ children, size, style, type, handleClick }) => {
  return (
    <button
      type={type}
      onClick={handleClick} 
      className={cx(
      'btn',
      {'btn--lg': size === 'lg'},
      {'btn--md': size === 'md'},
      {'btn--sm': size === 'sm'},
      {'btn--primary': style === 'primary'},
      {'btn--outline': style === 'outline'},
      {'btn--glass': style === 'glass'},
      {'btn--disabled': style === 'disabled'}
      )} >{children}</button>
  )
}

Button.propTypes = {
  children: PropTypes.string,
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  style: PropTypes.oneOf(['primary', 'glass', 'outline', 'disabled']),
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  handleClick: PropTypes.func,
}

Button.defaultProps = {
  children: 'LABEL',
  size: 'md',
  style: 'primary',
  type: 'button',
  handleClick: (e)=>{
    if (e.target.getAttribute('type') === 'button') {
      console.error('handleClick function must be passed as props from parent into Button')
    } else {
      console.log(`Button was clicked`)
    }
  }
}


export default Button


import React, { useEffect, useState } from 'react'
import styles from './TextInput.module.scss'
import classnames from 'classnames/bind'
import PropTypes from 'prop-types';

let cx = classnames.bind(styles)

const TextInput = ({ name, placeholder, handleChange, value, showError, errorMessage }) => {

    useEffect(()=>{
        console.log('showError: ', showError)
    }, [showError])
    return (
        <>
        <input
        className={cx(
            'input',
            {'input-error': showError}
            )}
            type='text'
            placeholder={placeholder}
            onChange={handleChange}
            value={value}
            
            name={name}
        />
        <span className={cx('error-msg', {'error-msg--hide': !showError})}>{errorMessage}</span>
        </>
    )
}

TextInput.propTypes = {
    name: PropTypes.string,
    placeholder: PropTypes.string,
    value: PropTypes.string,
    errorMessage: PropTypes.string,
    handleChange: PropTypes.func,
    showError: PropTypes.bool,
  }

export default TextInput
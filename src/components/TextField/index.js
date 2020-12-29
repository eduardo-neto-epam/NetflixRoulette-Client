import React from 'react'
import styles from './TextField.module.scss'
import classnames from 'classnames/bind'

import PropTypes from 'prop-types';

let cx = classnames.bind(styles)

import TextInput from '../TextInput'

const TextField = ({ name, label, placeholder, handleChange, value, showError, errorMessage }) => {
    return (
        <>
        <label className={cx(`label`)} htmlFor={name}>{label}</label>
        <TextInput
            name={name}
            placeholder={placeholder}
            handleChange={handleChange}
            value={value}
            errorMessage={errorMessage}
            showError={showError}
        />
        </>
    )
}

TextInput.propTypes = {
    name: PropTypes.string,
    label: PropTypes.string,
    placeholder: PropTypes.string,
    value: PropTypes.string,
    errorMessage: PropTypes.string,
    handleChange: PropTypes.func,
    showError: PropTypes.bool,
  }

export default TextField
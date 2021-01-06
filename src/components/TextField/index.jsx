import React from 'react';
import PropTypes from 'prop-types';

import classnames from 'classnames/bind';
import styles from './TextField.module.scss';

import TextInput from '../TextInput/index.jsx';

const cx = classnames.bind(styles);

const TextField = ({
  name, label, placeholder, handleChange, value, showError, errorMessage,
}) => (
  <>
    <label className={cx('label')} htmlFor={name}>{label}</label>
    <TextInput
      name={name}
      placeholder={placeholder}
      handleChange={handleChange}
      value={value}
      errorMessage={errorMessage}
      showError={showError}
    />
  </>
);

TextField.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  errorMessage: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  showError: PropTypes.bool.isRequired,
};

export default TextField;

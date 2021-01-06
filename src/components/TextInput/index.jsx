import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames/bind';
import styles from './TextInput.module.scss';

const cx = classnames.bind(styles);

const TextInput = ({
  name, placeholder, handleChange, value, showError, errorMessage,
}) => {
  useEffect(() => {
    // eslint-disable-next-line no-console
    console.log('showError: ', showError);
  }, [showError]);
  return (
    <>
      <input
        className={cx(
          'input',
          { 'input-error': showError },
        )}
        type="text"
        placeholder={placeholder}
        onChange={handleChange}
        value={value}
        name={name}
      />
      <span className={cx('error-msg', { 'error-msg--hide': !showError })}>{errorMessage}</span>
    </>
  );
};

TextInput.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  errorMessage: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  showError: PropTypes.bool.isRequired,
};

export default TextInput;

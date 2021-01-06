import React, { useState } from 'react';
import classnames from 'classnames/bind';
import PropTypes from 'prop-types';
import { now } from 'lodash';
import styles from './SelectGenreInput.module.scss';

const cx = classnames.bind(styles);

export function Checkbox({ option, handleCheckChange, isChecked }) {
  return (
    <label htmlFor={option}>
      {option}
      <input id={option} type="checkbox" onChange={handleCheckChange} name={option} checked={isChecked} value={option} />
      <span className={cx('checkbox')}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          aria-hidden="true"
          focusable="false"
        >
          <path
            fill="none"
            stroke="var(--color-contrast)"
            strokeWidth="3"
            d="M1.73 12.91l6.37 6.37L22.79 4.59"
          />
        </svg>
      </span>
    </label>
  );
}

Checkbox.propTypes = {
  option: PropTypes.string.isRequired,
  handleCheckChange: PropTypes.func.isRequired,
  isChecked: PropTypes.bool.isRequired,
};

const SelectGenreInput = ({
  genres, label, handleCheckChange, errorMessage, showError,
}) => {
  const [viewOptions, setViewOptions] = useState(false);

  function handleViewOptions() {
    setViewOptions((prev) => !prev);
  }

  return (
    <div className={cx('container', { 'container--open': viewOptions })}>
      <div className={cx('title')}>Genre</div>
      <div
        className={cx('_inner', { '_inner--error': showError })}
        onClick={handleViewOptions}
        role="button"
        tabIndex="0"
        onKeyPress={(e) => {
          if (e.key === 'Enter') {
            handleViewOptions();
          }
        }}

      >
        <div className={cx('label')}>Select Genre</div>
        <span className={cx(
          'arrow',
          { 'arrow--down': !viewOptions },
          { 'arrow--up': viewOptions },
        )}
        />
      </div>
      <ul className={cx(
        'options-container',
        { 'options-container--show': viewOptions },
      )}
      >
        {genres.map((genre) => (
          <li key={`${genre.value}${new Date(now).getTime()}`}>
            <Checkbox
              option={genre.value}
              label={label}
              handleCheckChange={handleCheckChange}
              isChecked={genre.isChecked}
            />
          </li>
        ))}
      </ul>
      <span className={cx(
        'error-msg',
        { 'error-msg--hide': !showError },
      )}
      >
        {errorMessage}
      </span>
    </div>
  );
};

SelectGenreInput.propTypes = {
  genres: PropTypes.arrayOf(PropTypes.object).isRequired,
  label: PropTypes.string.isRequired,
  handleCheckChange: PropTypes.func.isRequired,
  errorMessage: PropTypes.string.isRequired,
  showError: PropTypes.bool.isRequired,
};

export default SelectGenreInput;

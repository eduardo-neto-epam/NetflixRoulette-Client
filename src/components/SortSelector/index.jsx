import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames/bind';
import { v4 as uuidv4 } from 'uuid';
import styles from './SortSelector.module.scss';

const cx = classnames.bind(styles);

const SortSelector = ({ selectedMethod, setSelectedMethod, options }) => {
  const [viewOptions, setViewOptions] = useState(false);

  function handleSelection(e) {
    setSelectedMethod(e.target.textContent);
    setViewOptions((prev) => !prev);
  }

  function handleViewOptions() {
    setViewOptions((prev) => !prev);
  }

  return (
    <div className={cx('container')}>
      <div className={cx('_inner')}>
        <div className={cx('label')}>SORT BY</div>
        <div
          data-testid="selected-method"
          className={cx('selected-method')}
          onClick={handleViewOptions}
          tabIndex="0"
          onKeyPress={(e) => {
            if (e.key === 'Enter') {
              handleViewOptions();
            }
          }}
          role="button"
        >
          {selectedMethod}
        </div>
      </div>
      <ul className={cx(
        'options-container',
        { 'options-container--show': viewOptions },
      )}
      >
        {options.map((option) => (
          <li
            className={cx('option')}
            key={`${option}${uuidv4()}`}
          >
            <button
              onClick={handleSelection}
              onKeyPress={(e) => {
                if (e.key === 'Enter') {
                  handleSelection(e);
                }
              }}
              type="button"
              tabIndex="0"
            >
              {option}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

SortSelector.propTypes = {
  selectedMethod: PropTypes.string.isRequired,
  setSelectedMethod: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default SortSelector;

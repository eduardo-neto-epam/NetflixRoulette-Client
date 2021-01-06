import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames/bind';
import styles from './FilterSelector.module.scss';

const cx = classnames.bind(styles);

const FilterSelector = ({ filter, children, setFilter }) => {
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    setIsChecked(filter === children);
  }, [filter]);

  return (
    <label className={cx('filter')} htmlFor={children}>
      {children}
      <input
        type="radio"
        name="filters"
        id={children}
        checked={isChecked}
        className={cx(
          'menu-filter',
        )}
        onChange={(e) => setFilter(e.target.value)}
        value={children}
      />
      <span className={cx('checkmark')} />
    </label>
  );
};

FilterSelector.propTypes = {
  filter: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
  setFilter: PropTypes.func.isRequired,
};

export default FilterSelector;

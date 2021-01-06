import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames/bind';
import { v4 as uuidv4 } from 'uuid';
import styles from './FiltersMenu.module.scss';

import FilterSelector from '../../components/FilterSelector/index.jsx';

const cx = classnames.bind(styles);

const FiltersMenu = ({ filter, setFilter, filters }) => (
  <>
    <ul className={cx('menu')}>
      { filters.map((option) => (
        <li
          key={uuidv4()}
          className={cx(
            'filter',
          )}
        >
          <FilterSelector
            setFilter={setFilter}
            filter={filter}
          >
            {option}
          </FilterSelector>
        </li>
      )) }
    </ul>
  </>
);

FiltersMenu.propTypes = {
  filter: PropTypes.string.isRequired,
  setFilter: PropTypes.func.isRequired,
  filters: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default FiltersMenu;

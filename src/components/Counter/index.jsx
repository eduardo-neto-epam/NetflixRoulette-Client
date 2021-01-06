import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames/bind';
import styles from './Counter.module.scss';

const cx = classnames.bind(styles);

const Counter = ({ count }) => (
  <>
    <span className={cx('count')}>{count}</span>
    <p className={cx('text')}>movies found</p>
  </>
);

Counter.propTypes = {
  count: PropTypes.number.isRequired,
};

export default Counter;

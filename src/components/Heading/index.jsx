import React, { memo } from 'react';
import classnames from 'classnames/bind';
import PropTypes from 'prop-types';
import styles from './Heading.module.scss';

const cx = classnames.bind(styles);

const Heading = ({ children }) => (
  <h1 className={cx('heading')}>{ children }</h1>
);

Heading.propTypes = {
  children: PropTypes.string,
};

Heading.defaultProps = {
  children: 'FIND YOUR MOVIE',
};

export default memo(Heading);

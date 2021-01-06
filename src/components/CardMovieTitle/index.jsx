import React, { memo } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames/bind';
import styles from './CardMovieTitle.module.scss';

const cx = classnames.bind(styles);

const CardMovieTitle = ({ title }) => (
  <h3 className={cx('title')}>{title}</h3>
);

CardMovieTitle.propTypes = {
  title: PropTypes.string.isRequired,
};

export default memo(CardMovieTitle);

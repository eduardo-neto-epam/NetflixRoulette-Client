import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames/bind';
import styles from './CardMovieRelease.module.scss';

const cx = classnames.bind(styles);

const CardMovieRelease = ({ releaseYear }) => (
  <div className={cx('year')}>{releaseYear}</div>
);

CardMovieRelease.propTypes = {
  releaseYear: PropTypes.string.isRequired,
};

export default CardMovieRelease;

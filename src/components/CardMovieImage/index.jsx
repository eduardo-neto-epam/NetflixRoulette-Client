import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames/bind';
import styles from './CardMovieImage.module.scss';

const cx = classnames.bind(styles);

const CardMovieImage = ({ src, alt }) => (
  <div className={cx('container')}>
    <img src={src} alt={alt} className={cx('image')} />
  </div>
);

CardMovieImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
};

CardMovieImage.defaultProps = {
  alt: '',
};

export default CardMovieImage;

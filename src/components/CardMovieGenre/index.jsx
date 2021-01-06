import React from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import classnames from 'classnames/bind';
import styles from './CardMovieGenre.module.scss';

const cx = classnames.bind(styles);

const CardMovieGenre = ({ genres }) => {
  const lastItem = genres[genres.length - 1];

  return (
    <p className={cx('genres')}>
      {genres.length === 2 && genres.map((genre) => (
        genre !== lastItem
          ? (
            <span key={uuidv4()}>
              {
                genre
            }
              {' '}
              &amp;
              {' '}
            </span>
          )
          : <span key={uuidv4()}>{genre}</span>))}
      {genres.length > 2 && genres.map((genre) => (
        genre !== lastItem
          ? (
            <span key={uuidv4()}>
              {genre}
              ,
              {' '}
            </span>
          )
          : <span key={uuidv4()}>{genre}</span>))}
      {genres.length < 2 && genres.map((genre) => (<span key={uuidv4()}>{genre}</span>))}
    </p>
  );
};

CardMovieGenre.propTypes = {
  genres: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};

export default CardMovieGenre;

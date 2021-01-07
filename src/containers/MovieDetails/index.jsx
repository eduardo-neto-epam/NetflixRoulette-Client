import React, { useContext } from 'react';
import classnames from 'classnames/bind';
import styles from './MovieDetails.module.scss';
/* eslint import/no-cycle: [0, { maxDepth: 2 }] */
import { MovieDetailsContext } from '../../App.jsx';

import Logo from '../../components/Logo/index.jsx';
import SearchIcon from '../../components/SearchIcon/index.jsx';

const cx = classnames.bind(styles);

const MovieDetails = () => {
  const { movieDetails, dispatch } = useContext(MovieDetailsContext);

  const {
    imageSrc,
    imageAlt,
    movieTittle,
    movieRating,
    movieTagline,
    movieReleaseDate,
    movieOverview,
    movieRuntime,
  } = movieDetails.details;
  return (
    <>
      <div className={cx('bg-image-frame')}>
        <div className={cx('bg-image')} />
      </div>
      <div className={cx('container')}>
        <div className={cx('header')}>
          <Logo />
          <button
            type="button"
            onClick={() => { dispatch({ type: 'HIDE_DETAILS' }); }}
          >
            <SearchIcon />
          </button>
        </div>
        <div className={cx('body')}>
          <div className={cx('image-wrapper')}>
            <img src={imageSrc} alt={imageAlt} />
          </div>
          <div className={cx('content-wrapper')}>
            <div className={cx('heading')}>
              <h1 className={cx('title')}>{movieTittle}</h1>
              <div className={cx('rating')}>{movieRating}</div>
            </div>
            <h3 className={cx('tagline')}>{movieTagline}</h3>
            <div className={cx('stats-row')}>
              <div className={cx('year')}>{movieReleaseDate.slice(0, 4)}</div>
              <div className={cx('runtime')}>{`${movieRuntime} min`}</div>
            </div>
            <p className={cx('overview')}>{movieOverview}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieDetails;

import React, { useEffect, useState, useContext } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames/bind';
import styles from './CardMovie.module.scss';
/* eslint import/no-cycle: [2, { maxDepth: 1 }] */
import { MovieDetailsContext } from '../../App.jsx';

import CardMovieImage from '../../components/CardMovieImage/index.jsx';
import CardMovieTitle from '../../components/CardMovieTitle/index.jsx';
import CardMovieRelease from '../../components/CardMovieRelease/index.jsx';
import CardMovieGenre from '../../components/CardMovieGenre/index.jsx';
import CardMenuButton from '../../components/CardMenuButton/index.jsx';
import CardMenu from '../../components/CardMenu/index.jsx';
import Modal from '../../components/Modal/index.jsx';
import ErrorBoundary from '../../components/ErrorBoundary/index.jsx';
import MovieForm from '../../forms/MovieForm/index.jsx';
import DeleteMovie from '../../components/DeleteMovie/index.jsx';

const cx = classnames.bind(styles);

const CardMovie = ({
  movieID,
  imageSrc,
  imageAlt,
  movieTittle,
  movieRating,
  movieTagline,
  movieReleaseDate,
  movieGenres,
  movieOverview,
  movieRuntime,
}) => {
  const { dispatch } = useContext(MovieDetailsContext);
  // const { movieData, dataDispatch } = useContext(MovieDataContext);
  const [showMenu, setShowMenu] = useState(false);
  const [showMenuButton, setShowMenuButton] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  function loadMovieDetails() {
    dispatch({
      type: 'SHOW_DETAILS',
      payload: {
        movieID,
        imageSrc,
        imageAlt,
        movieTittle,
        movieRating,
        movieTagline,
        movieReleaseDate,
        movieGenres,
        movieOverview,
        movieRuntime,
      },
    });
  }

  function handleKeyPress(e) {
    if (e.key === 'Enter') {
      loadMovieDetails();
    }
  }

  function handleMenuButtonVisibility() {
    setShowMenuButton(!showMenuButton);
  }

  function handleMenuButtonClick(e) {
    e.stopPropagation();
    setShowMenu(!showMenu);
  }

  function closeEditModal() {
    setIsEditModalOpen(false);
  }
  function closeDeleteModal() {
    setIsDeleteModalOpen(false);
  }

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }

  // TODO: IMPLEMENT DELETE FUNCTIONALITY
  function handleDeleteMovie() {
    // eslint-disable-next-line no-console
    console.log(`Movie with Id: ${movieID} is deleted`);
    closeDeleteModal();
  }

  useEffect(() => {
    if (isEditModalOpen || isDeleteModalOpen) {
      scrollToTop();
    }
  }, [isEditModalOpen, isDeleteModalOpen]);

  return (
    <div
      className={cx('card', 'card-container')}
      onMouseEnter={handleMenuButtonVisibility}
      onMouseLeave={handleMenuButtonVisibility}
      onClick={loadMovieDetails}
      role="button"
      tabIndex="0"
      onKeyPress={handleKeyPress}
      id={movieID}
    >
      <CardMovieImage src={imageSrc} alt={imageAlt} />
      <div className={cx('card-details')}>
        <div className={cx('card-details-top-row')}>
          <CardMovieTitle title={movieTittle} />
          <CardMovieRelease releaseYear={movieReleaseDate.slice(0, 4)} />
        </div>
        <CardMovieGenre genres={movieGenres} />
      </div>
      <div
        className={cx(
          'menu-button',
          { 'menu-button--show': showMenuButton },
        )}
        onClick={handleMenuButtonClick}
        onKeyPress={(e) => {
          e.stopPropagation();
          if (e.key === 'Enter') {
            handleMenuButtonClick(e);
          }
        }}
        role="button"
        tabIndex="0"
      >
        <CardMenuButton />
      </div>
      <div className={cx(
        'menu',
        { 'menu--show': showMenu },
      )}
      >
        <CardMenu
          setShowMenu={setShowMenu}
          setIsDeleteModalOpen={setIsDeleteModalOpen}
          setIsEditModalOpen={setIsEditModalOpen}
          setShowMenuButton={setShowMenuButton}
        />
      </div>
      {isEditModalOpen && (
        <Modal onClose={closeEditModal}>
          <ErrorBoundary>
            <MovieForm
              movieID={movieID.toString()}
              movieImageUrl={imageSrc}
              movieTitle={movieTittle}
              movieReleaseDate={movieReleaseDate}
              movieGenres={movieGenres}
              movieOverview={movieOverview}
              movieRuntime={movieRuntime.toString()}
              isEditModalOpen
            />
          </ErrorBoundary>
        </Modal>
      )}
      {isDeleteModalOpen && (
        <Modal onClose={closeDeleteModal}>
          <ErrorBoundary>
            <DeleteMovie handleDelete={handleDeleteMovie} />
          </ErrorBoundary>
        </Modal>
      )}
    </div>
  );
};

CardMovie.propTypes = {
  movieID: PropTypes.number.isRequired,
  imageSrc: PropTypes.string.isRequired,
  imageAlt: PropTypes.string.isRequired,
  movieTittle: PropTypes.string.isRequired,
  movieRating: PropTypes.number.isRequired,
  movieTagline: PropTypes.string.isRequired,
  movieReleaseDate: PropTypes.string.isRequired,
  movieGenres: PropTypes.arrayOf(PropTypes.string).isRequired,
  movieOverview: PropTypes.string.isRequired,
  movieRuntime: PropTypes.number.isRequired,
};

export default CardMovie;

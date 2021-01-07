import React, { useMemo, useReducer } from 'react';
import classnames from 'classnames/bind';
import HeaderBanner from './containers/HeaderBanner/index.jsx';
import ErrorBoundary from './components/ErrorBoundary/index.jsx';
/* eslint import/no-cycle: [2, { maxDepth: 1 }] */
import Main from './containers/Main/index.jsx';
import styles from './App.module.scss';
import MovieDetails from './containers/MovieDetails/index.jsx';

const cx = classnames.bind(styles);

export const MovieDetailsContext = React.createContext();

const App = () => {
  const initialState = {
    isVisible: false,
    details: {},
  };
  const movieDetailsReducer = (movieDetails = initialState, action) => {
    switch (action.type) {
      case 'SHOW_DETAILS':
        return {
          ...movieDetails,
          isVisible: true,
          details: {
            ...action.payload,
          },
        };
      case 'HIDE_DETAILS':
        return {
          ...movieDetails,
          isVisible: false,
          details: {},
        };
      default:
        return movieDetails;
    }
  };
  const [movieDetails, dispatch] = useReducer(movieDetailsReducer, initialState);
  const movieDetailsValue = useMemo(
    () => ({ movieDetails, dispatch }), [movieDetails, dispatch],
  );

  return (
    <MovieDetailsContext.Provider value={movieDetailsValue}>
      <div className={cx('container')}>
        {!movieDetails.isVisible
        && (
        <ErrorBoundary>
          <HeaderBanner />
        </ErrorBoundary>
        )}
        {movieDetails.isVisible
        && (
        <ErrorBoundary>
          <MovieDetails />
        </ErrorBoundary>
        )}
        <ErrorBoundary>
          <Main />
        </ErrorBoundary>
      </div>
    </MovieDetailsContext.Provider>
  );
};

export default App;

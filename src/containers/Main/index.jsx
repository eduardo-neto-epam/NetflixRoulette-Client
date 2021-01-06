import React, { useEffect, useState } from 'react';
import classnames from 'classnames/bind';
import styles from './Main.module.scss';
import { sortMovies } from '../../utils/sortFunctions/index.js';
import filterMovies from '../../utils/filterMovies/index.js';

import FiltersMenu from '../FiltersMenu/index.jsx';
import SortSelector from '../../components/SortSelector/index.jsx';
import Footer from '../Footer/index.jsx';
import Counter from '../../components/Counter/index.jsx';
import ErrorBoundary from '../../components/ErrorBoundary/index.jsx';
import CardMovie from '../CardMovie/index.jsx';

import DummyData from '../../dummyData/index.json';

const cx = classnames.bind(styles);

const Main = () => {
  const [movies, setMovies] = useState([]);
  const [filter, setFilter] = useState('all');
  const filters = [
    'all',
    'documentary',
    'comedy',
    'horror',
    'crime',
    'action',
  ];
  const [selectedMethod, setSelectedMethod] = useState('release date');
  const sortOptions = [
    'release date',
    'movie title',
    'movie genre',
  ];

  useEffect(() => {
    const data = DummyData;
    const sortedData = sortMovies(data, selectedMethod, filter);
    setMovies(() => [...sortedData]);
  }, [selectedMethod]);

  useEffect(() => {
    const data = DummyData;
    const filteredMovies = filterMovies(filter, data);
    setMovies(() => [...filteredMovies]);
    // eslint-disable-next-line no-console
    console.log('Current Filter is: ', filter);
  }, [filter]);

  return (
    <div className={cx('background')}>
      <div className={cx('container')}>
        <div className={cx('menu-row')}>
          <FiltersMenu filter={filter} setFilter={setFilter} filters={filters} />
          <SortSelector
            options={sortOptions}
            selectedMethod={selectedMethod}
            setSelectedMethod={setSelectedMethod}
          />
        </div>
        <hr className={cx('separator')} />
        <ErrorBoundary>
          <div className={cx({ inner: !movies.length }, { 'inner--display': movies.length })}>
            { !movies.length && <h3 className={cx('no-movies-warn')}>No Movie Found</h3>}
            { movies.length > 0 && <Counter count={movies.length} />}
            { movies.length > 0 && (
            <div className={cx('wrapper')}>
              { movies.length > 0 && movies.map((movie) => (
                <CardMovie
                  key={movie.id}
                  movieID={movie.id}
                  imageSrc={movie.poster_path}
                  imageAlt={`Poster for movie ${movie.title}`}
                  movieTittle={movie.title}
                  movieReleaseDate={movie.release_date}
                  movieGenres={movie.genres}
                  movieOverview={movie.overview}
                  movieRuntime={movie.runtime}
                />
              )) }
            </div>
            ) }
          </div>
        </ErrorBoundary>
      </div>
      <Footer />
    </div>
  );
};

export default Main;

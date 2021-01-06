/* eslint-disable no-console */
import React, { useEffect, useReducer, useState } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames/bind';
import styles from './MovieForm.module.scss';

import formReducer from '../../utils/formHandlers/index.js';
import { compareValues } from '../../utils/sortFunctions/index.js';

import CustomDatePicker from '../../components/CustomDatePicker/index.jsx';
import Button from '../../components/Button/index.jsx';
import TextField from '../../components/TextField/index.jsx';
import SelectGenreInput from '../../components/SelectGenreInput/index.jsx';

const cx = classnames.bind(styles);

const genresList = [
  { id: '1', value: 'Crime', isChecked: false },
  { id: '2', value: 'Documentary', isChecked: false },
  { id: '3', value: 'Horror', isChecked: false },
  { id: '4', value: 'Comedy', isChecked: false },
  { id: '5', value: 'Action', isChecked: false },
  { id: '6', value: 'Adventure', isChecked: false },
  { id: '7', value: 'Drama', isChecked: false },
  { id: '8', value: 'Romance', isChecked: false },
  { id: '9', value: 'Fantasy', isChecked: false },
  { id: '10', value: 'Science Fiction', isChecked: false },
  { id: '11', value: 'Family', isChecked: false },
  { id: '12', value: 'Animation', isChecked: false },
  { id: '13', value: 'Mystery', isChecked: false },
  { id: '14', value: 'Thriller', isChecked: false },
].sort(compareValues('value'));

const MovieForm = ({
  movieID,
  movieTitle,
  movieReleaseDate,
  movieImageUrl,
  movieGenres,
  movieOverview,
  movieRuntime,
  isEditModalOpen,
}) => {
  const initialAddState = {
    title: '',
    releaseDate: new Date(),
    movieUrl: '',
    genres: genresList,
    overview: '',
    runtime: '',
  };

  const initialEditState = {
    id: movieID,
    title: movieTitle,
    releaseDate: new Date(movieReleaseDate),
    movieUrl: movieImageUrl,
    genres: genresList,
    overview: movieOverview,
    runtime: movieRuntime.toString(),
  };

  function pickInitialState() {
    if (isEditModalOpen) {
      return initialEditState;
    }
    return initialAddState;
  }

  const initialState = pickInitialState();

  const [state, updateState] = useReducer(formReducer, initialState);

  const initialErrorState = {
    titleHasError: false,
    movieUrlHasError: false,
    genreHasError: true,
    overviewHasError: false,
    runtimeHasError: false,
  };

  const [errors, setErrors] = useState(initialErrorState);

  const [isValidForm, setIsValidForm] = useState(false);

  const [isSubmited, setIsSubmited] = useState(false);

  const initialDate = new Date();

  const [startDate, setStartDate] = useState(initialDate);

  const errorMessages = {
    titleErrorMessage: 'Please enter a Title.',
    movieUrlErrorMessage: 'Please enter a valid URL.',
    genreErrorMessage: 'Please select at least one genre.',
    overviewErrorMessage: 'Please describe an overview.',
    runtimeErrorMessage: 'Please enter the movie runtime.',
  };

  const updateForm = React.useCallback((event) => {
    const {
      value, type, name, checked,
    } = event.target;
    const updatePath = name.split('.');
    if (type === 'checkbox') {
      updateState((prev) => {
        const updatedGenre = prev.genres.find((genre) => genre.value === value);
        const index = prev.genres.indexOf(updatedGenre);
        // eslint-disable-next-line no-param-reassign
        prev.genres[index].isChecked = checked;
        return {
          ...prev,
          genres: [
            ...prev.genres,
          ],
        };
      });
      setErrors((prev) => ({
        ...prev,
        genreHasError: !(state.genres.some((genre) => genre.isChecked === true)),
      }));
      return;
    }

    if (updatePath.length === 1) {
      const [key] = updatePath;

      setErrors((prev) => {
        if (!value.length) {
          return {
            ...prev,
            [`${key}HasError`]: true,
          };
        }
        return {
          ...prev,
          [`${key}HasError`]: false,
        };
      });

      updateState({
        [key]: value,
      });
    }

    if (updatePath.length === 2) {
      updateState({
        _path: updatePath,
        _value: value,
      });
    }
  }, []);

  useEffect(() => {
    if (isEditModalOpen) {
      updateState((prev) => {
        prev.genres.forEach((genre) => {
          // eslint-disable-next-line no-param-reassign
          genre.isChecked = false;
        });
        const updatedGenres = prev.genres.filter((genre) => movieGenres.includes(genre.value));
        let index;
        updatedGenres.forEach((genre) => {
          index = prev.genres.indexOf(genre);
          // eslint-disable-next-line no-param-reassign
          prev.genres[index].isChecked = true;
        });
        return {
          ...prev,
          genres: [
            ...prev.genres,
          ],
        };
      });
    }
  }, [isEditModalOpen]);

  useEffect(() => {
    setStartDate(state.releaseDate);
  }, []);

  useEffect(() => {
    setErrors((prev) => ({
      ...prev,
      genreHasError: !(state.genres.some((genre) => genre.isChecked === true)),
    }));
  }, [state.genres]);

  const {
    title, movieUrl, overview, runtime,
  } = state;

  useEffect(() => {
    if (
      title.length
            && movieUrl.length
            && overview.length
            && runtime.length
            && !(errors.genreHasError)
    ) {
      setIsValidForm(true);
    } else {
      setIsValidForm(false);
    }
    setIsSubmited(false);
  }, [state]);

  function handleSubmit(e) {
    e.preventDefault();
    if (isValidForm && !isSubmited) {
      // eslint-disable-next-line no-console
      console.log('Submited: ', state);
    } else if (!isValidForm) {
      // eslint-disable-next-line no-console
      console.log('There are invalid inputs in the form');
    } else if (isSubmited) {
      // eslint-disable-next-line no-console
      console.log('form has been submitted already, please reset form or change values.');
    }
    setIsSubmited(true);
  }

  function handleReset() {
    setIsSubmited(false);
    if (isEditModalOpen) {
      updateState((prev) => {
        prev.genres.forEach((genre) => {
          if (movieGenres.includes(genre.value)) {
            // eslint-disable-next-line no-param-reassign
            genre.isChecked = true;
          } else {
            // eslint-disable-next-line no-param-reassign
            genre.isChecked = false;
          }
        });
        return {
          ...prev,
          genres: [
            ...prev.genres,
          ],
        };
      });
    }
    if (!isEditModalOpen) {
      updateState((prev) => {
        prev.genres.forEach((genre) => {
          // eslint-disable-next-line no-param-reassign
          genre.isChecked = false;
        });
        return {
          ...prev,
          genres: [
            ...prev.genres,
          ],
        };
      });
      setStartDate(new Date());
    }
    updateState(initialState);
    setErrors(initialErrorState);
  }

  const {
    titleHasError, movieUrlHasError, genreHasError, overviewHasError, runtimeHasError,
  } = errors;

  return (
    <form onSubmit={handleSubmit} onReset={handleReset} className={cx('form')}>
      {!movieID && <h2 className={cx('form-heading')}>ADD MOVIE</h2>}
      {movieID && <h2 className={cx('form-heading')}>EDIT MOVIE</h2>}
      {movieID
        && (
        <>
          <div className={cx('id-heading')}>Movie ID</div>
          <div className={cx('id-value')}>{movieID}</div>
        </>
        )}
      <TextField
        name="title"
        label="title"
        placeholder="Movie title here"
        handleChange={updateForm}
        value={title}
        showError={titleHasError || false}
        errorMessage={errorMessages.titleErrorMessage}
      />
      <CustomDatePicker
        startDate={startDate}
        setStartDate={setStartDate}
      />
      <TextField
        name="movieUrl"
        label="movie url"
        placeholder="www.moana.com"
        handleChange={updateForm}
        value={movieUrl}
        errorMessage={errorMessages.movieUrlErrorMessage}
        showError={movieUrlHasError || false}
      />
      <SelectGenreInput
        genres={state.genres}
        label="Select Genre"
        handleCheckChange={updateForm}
        errorMessage={errorMessages.genreErrorMessage}
        showError={genreHasError || false}
      />
      <TextField
        name="overview"
        label="overview"
        placeholder="Overview text goes here"
        handleChange={updateForm}
        value={overview}
        errorMessage={errorMessages.overviewErrorMessage}
        showError={overviewHasError || false}
      />
      <TextField
        name="runtime"
        label="runtime"
        placeholder="Runtime goes here"
        handleChange={updateForm}
        value={runtime}
        errorMessage={errorMessages.runtimeErrorMessage}
        showError={runtimeHasError || false}
      />
      <div className={cx('buttons')}>
        <Button
          size="md"
          btnStyle="outline"
          type="reset"
          handleClick={handleReset}
        >
          reset
        </Button>
        <span className={cx('buttons-spacer')} />
        {isValidForm && (
          <Button
            size="md"
            btnStyle="primary"
            type="submit"
          >
            submit
          </Button>
        )}
        {!isValidForm && (
          <Button
            size="md"
            btnStyle="disabled"
            type="submit"
          >
            submit
          </Button>
        )}
      </div>
    </form>
  );
};

MovieForm.propTypes = {
  movieID: PropTypes.string,
  movieTitle: PropTypes.string,
  movieReleaseDate: PropTypes.string,
  movieImageUrl: PropTypes.string,
  movieGenres: PropTypes.arrayOf(PropTypes.string),
  movieOverview: PropTypes.string,
  movieRuntime: PropTypes.string,
  isEditModalOpen: PropTypes.bool,
};

MovieForm.defaultProps = {
  movieID: '',
  movieTitle: '',
  movieReleaseDate: new Date().toString(),
  movieImageUrl: '',
  movieGenres: [''],
  movieOverview: '',
  movieRuntime: '',
  isEditModalOpen: false,
};

export default MovieForm;

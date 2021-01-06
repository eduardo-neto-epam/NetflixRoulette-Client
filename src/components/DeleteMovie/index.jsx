import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames/bind';
import styles from './DeleteMovie.module.scss';

import Button from '../Button/index.jsx';

const cx = classnames.bind(styles);

const DeleteMovie = ({ handleDelete }) => (
  <div className={cx('container')}>
    <div className={cx('heading')}>delete movie</div>
    <div className={cx('sub-heading')}>Are you sure you want to delete this movie?</div>
    <div className={cx('btn-area')}>
      <Button type="button" btnStyle="primary" size="lg" handleClick={handleDelete}>Confirm</Button>
    </div>
  </div>
);

DeleteMovie.propTypes = {
  handleDelete: PropTypes.func.isRequired,
};

export default DeleteMovie;

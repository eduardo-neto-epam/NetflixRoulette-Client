/* eslint-disable linebreak-style */
import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames/bind';
import styles from './CardMenu.module.scss';

const cx = classnames.bind(styles);

const CardMenu = ({
  setShowMenu, setIsEditModalOpen, setShowMenuButton, setIsDeleteModalOpen,
}) => {
  function closeMenu(e) {
    e.stopPropagation();
    setShowMenu(false);
  }
  function openEditMovie(e) {
    e.stopPropagation();
    setShowMenu(false);
    setIsEditModalOpen(true);
    setShowMenuButton(false);
  }
  function openDeleteMovie(e) {
    e.stopPropagation();
    setShowMenu(false);
    setIsDeleteModalOpen(true);
    setShowMenuButton(false);
  }

  return (
    <div className={cx('container')}>
      <div
        className={cx('close-icon')}
        role="button"
        tabIndex="0"
        onClick={closeMenu}
        onKeyDown={(e) => {
          e.stopPropagation();
          if (e.key === 'Esc') {
            closeMenu(e);
          }
        }}
      >
        X
      </div>
      <div
        className={cx('option')}
        role="button"
        tabIndex="0"
        onClick={openEditMovie}
        onKeyDown={(e) => {
          e.stopPropagation();
          if (e.key === 'Enter') {
            openEditMovie(e);
          }
        }}
      >
        Edit
      </div>
      <div
        className={cx('option')}
        role="button"
        tabIndex="0"
        onClick={openDeleteMovie}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            e.stopPropagation();
            openDeleteMovie(e);
          }
        }}
      >
        Delete
      </div>
    </div>
  );
};

CardMenu.propTypes = {
  setShowMenu: PropTypes.func.isRequired,
  setIsEditModalOpen: PropTypes.func.isRequired,
  setShowMenuButton: PropTypes.func.isRequired,
  setIsDeleteModalOpen: PropTypes.func.isRequired,
};

export default CardMenu;

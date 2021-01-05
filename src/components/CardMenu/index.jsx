/* eslint-disable linebreak-style */
import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames/bind';
import styles from './CardMenu.module.scss';

const cx = classnames.bind(styles);

const CardMenu = ({
  setShowMenu, setIsEditModalOpen, setShowMenuButton, setIsDeleteModalOpen,
}) => (
  <div className={cx('container')}>
    <div
      className={cx('close-icon')}
      role="button"
      tabIndex="0"
      onClick={() => setShowMenu(false)}
      onKeyDown={(e) => {
        if (e.key === 'Esc') {
          setShowMenu(false);
        }
      }}
    >
      X
    </div>
    <div
      className={cx('option')}
      role="button"
      tabIndex="0"
      onClick={() => {
        setShowMenu(false);
        setIsEditModalOpen(true);
        setShowMenuButton(false);
      }}
      onKeyDown={(e) => {
        if (e.key === 'Enter') {
          setShowMenu(false);
          setIsEditModalOpen(true);
          setShowMenuButton(false);
        }
      }}
    >
      Edit
    </div>
    <div
      className={cx('option')}
      role="button"
      tabIndex="0"
      onClick={() => {
        setShowMenu(false);
        setIsDeleteModalOpen(true);
        setShowMenuButton(false);
      }}
      onKeyDown={(e) => {
        if (e.key === 'Enter') {
          setShowMenu(false);
          setIsDeleteModalOpen(true);
          setShowMenuButton(false);
        }
      }}
    >
      Delete
    </div>
  </div>
);

CardMenu.propTypes = {
  setShowMenu: PropTypes.func.isRequired,
  setIsEditModalOpen: PropTypes.func.isRequired,
  setShowMenuButton: PropTypes.func.isRequired,
  setIsDeleteModalOpen: PropTypes.func.isRequired,
};

export default CardMenu;

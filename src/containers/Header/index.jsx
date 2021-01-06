import React, { useState } from 'react';
import classnames from 'classnames/bind';
import styles from './Header.module.scss';
import Logo from '../../components/Logo/index.jsx';
import Button from '../../components/Button/index.jsx';
import Modal from '../../components/Modal/index.jsx';
import MovieForm from '../../forms/MovieForm/index.jsx';
import ErrorBoundary from '../../components/ErrorBoundary/index.jsx';

const cx = classnames.bind(styles);

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  function handleClick() {
    setIsModalOpen(true);
  }

  function closeModal() {
    setIsModalOpen(false);
  }

  return (
    <div className={cx('container')}>
      <Logo />
      <Button size="lg" btnStyle="glass" type="button" handleClick={handleClick}>+ ADD MOVIE</Button>
      {isModalOpen && (
        <Modal onClose={closeModal}>
          <ErrorBoundary>
            <MovieForm />
          </ErrorBoundary>
        </Modal>
      )}
    </div>
  );
};

export default Header;

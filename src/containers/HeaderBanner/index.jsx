import React from 'react';
import classnames from 'classnames/bind';
import styles from './HeaderBanner.module.scss';
import Header from '../Header/index.jsx';
import Heading from '../../components/Heading/index.jsx';
import SearchForm from '../../components/SearchForm/index.jsx';

const cx = classnames.bind(styles);

const HeaderBanner = () => (
  <>
    <div className={cx('image-frame')}>
      <div className={cx('bg-image')} />
    </div>
    <div className={cx('container')}>
      <Header />
      <Heading />
      <SearchForm />
    </div>
  </>
);

export default HeaderBanner;

import React from 'react';
import classnames from 'classnames/bind';
import styles from './CardMenuButton.module.scss';

const cx = classnames.bind(styles);

const CardMenuButton = () => (
  <div className={cx('container')}>
    <div className={cx('dot')} />
    <div className={cx('dot')} />
    <div className={cx('dot')} />
  </div>
);

export default CardMenuButton;

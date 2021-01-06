import React, { memo } from 'react';
import classnames from 'classnames/bind';
import styles from './Logo.module.scss';

const cx = classnames.bind(styles);

const Logo = () => (
  <div>
    <span className={cx('brand', 'brand--bold')}>netflix</span>
    <span className={cx('brand')}>roulette</span>
  </div>
);

export default memo(Logo);

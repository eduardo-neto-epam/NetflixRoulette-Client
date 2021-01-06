import React from 'react';
import classnames from 'classnames/bind';
import styles from './Footer.module.scss';
import Logo from '../../components/Logo/index.jsx';

const cx = classnames.bind(styles);

const Footer = () => (
  <div className={cx('container')}>
    <Logo />
  </div>
);

export default Footer;

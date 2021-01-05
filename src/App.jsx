import React from 'react';
import classnames from 'classnames/bind';
import HeaderBanner from './containers/HeaderBanner/index.jsx';
import ErrorBoundary from './components/ErrorBoundary/index.jsx';
import Main from './containers/Main/index.jsx';
import styles from './App.module.scss';

const cx = classnames.bind(styles);

const App = () => (
  <div className={cx('container')}>
    <ErrorBoundary>
      <HeaderBanner />
    </ErrorBoundary>
    <ErrorBoundary>
      <Main />
    </ErrorBoundary>
  </div>
);

export default App;

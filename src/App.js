import React from 'react'
import styles from './App.module.scss'
import classnames from 'classnames/bind'
import HeaderBanner from './containers/HeaderBanner'
import Main from './containers/Main'
import ErrorBoundary from './components/ErrorBoundary'

let cx = classnames.bind(styles)

const App = () => {
  return (
    <div className={cx('container')}>
      <ErrorBoundary>
        <HeaderBanner />
      </ErrorBoundary>
      <ErrorBoundary>
        <Main />
      </ErrorBoundary>
    </div>
  )
}

export default App
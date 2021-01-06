import React from 'react';
import PropTypes from 'prop-types';
import styles from './ErrorBoundary.module.scss';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: null, errorInfo: null };
  }

  componentDidCatch(error, errorInfo) {
    // Catch errors in any components below and re-render with error message
    this.setState({
      error,
      errorInfo,
    });
    // You can also log error messages to an error reporting service here
    // eslint-disable-next-line no-console
    console.log('Error: ', error.toString());
  }

  render() {
    const { errorInfo, error } = this.state;
    const { children } = this.props;
    if (errorInfo) {
      // Error path
      return (
        <div className={styles.container}>
          <h2 className={styles.warning}>Oops, something went wrong.</h2>
          <div className={styles.details}>
            <h3 className={styles.error}>
              {error && error.toString()}
            </h3>
            <p className={styles.stack}>
              {errorInfo.componentStack}
            </p>
          </div>
        </div>
      );
    }
    // Normally, just render children
    return children;
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.element.isRequired,
};

export default ErrorBoundary;

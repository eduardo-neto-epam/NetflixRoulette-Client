import React from 'react'
import styles from './ErrorBoundary.module.scss'

class ErrorBoundary extends React.Component {
    constructor(props) {
      super(props);
      this.state = { error: null, errorInfo: null };
    }
    
    componentDidCatch(error, errorInfo) {
      // Catch errors in any components below and re-render with error message
      this.setState({
        error: error,
        errorInfo: errorInfo
      })
      // You can also log error messages to an error reporting service here
      console.log('Error: ', error.toString())
      console.log('Error Stack: ', errorInfo.componentStack)
    }
    
    render() {
      if (this.state.errorInfo) {
        // Error path
        return (
          <div className={styles.container}>
            <h2 className={styles.warning}>Oops, something went wrong.</h2>
            <div className={styles.details}>
                <h3 className={styles.error}>
                {this.state.error && this.state.error.toString()}
                </h3>
                <p className={styles.stack}>
                {this.state.errorInfo.componentStack}
                </p>
            </div>
          </div>
        );
      }
      // Normally, just render children
      return this.props.children;
    }  
  }

  export default ErrorBoundary;
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './_library.css'
import './global.scss'

const rootElement = document.getElementById("app");
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  rootElement,
)
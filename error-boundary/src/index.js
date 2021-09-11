import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import ErrorBoundary from './ErrorBoundary';

const mail = (
  <ErrorBoundary>
    <App />
  </ErrorBoundary>
)

ReactDOM.render(mail, document.getElementById('root'));
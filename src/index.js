import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';

// if using redux for state management:
// import { Provider } from 'react-redux';

// eslint-disable-next-line no-unused-vars
import Style from './stylesheets/main.scss';

const el = document.getElementById('app');

export default ReactDOM.render(
  <div>
    <App />
  </div>, el
);

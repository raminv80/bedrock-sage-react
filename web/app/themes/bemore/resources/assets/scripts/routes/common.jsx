import React from 'react';
import ReactDom from 'react-dom';
import App from '../views/containers/App.jsx';

export default {
  init() {
    // JavaScript to be fired on all pages
    ReactDom.render(<App/>, document.getElementById('root'));
  },
  finalize() {
    // JavaScript to be fired on all pages, after page specific JS is fired
  },
};

import 'bootstrap/dist/css/bootstrap.min.css';
import WebFont from 'webfontloader';

// Put any other imports below so that CSS from your
// components takes precedence over default styles.

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import App from './App';
import registerServiceWorker from './registerServiceWorker';

WebFont.load({
    google: {
      families:  ['Roboto:300,400,700', 'sans-serif']
    
    }
  });
  
  WebFont.load({
      google: {
          families: ['Oswald','sans-serif']
      }
  })
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

render(
  <Router>
    <div>
      <Route component={App}
        path="/"
      />
    </div>
  </Router>,
  document.getElementById('root')
);
registerServiceWorker();

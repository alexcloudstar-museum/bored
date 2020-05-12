import React from 'react';
import ReactDOM from 'react-dom';

import 'index.scss';

import { BrowserRouter } from 'react-router-dom';

import Root from 'Root';
import App from 'components/App';

ReactDOM.render(
  <Root>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Root>,
  document.querySelector('#root')
);

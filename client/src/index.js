import React from 'react';
import ReactDOM from 'react-dom';

import AppProvider from './components/AppContext';
import App from './components/App';

ReactDOM.render(
  <AppProvider>
    <App />
  </AppProvider>,
  document.getElementById('root')
);

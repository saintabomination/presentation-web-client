import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

import { Provider as ReduxProvider } from 'react-redux';
import store from './redux/store';

import { BrowserRouter as Router } from 'react-router-dom';

const container = document.getElementById('root')!;
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <ReduxProvider store={store}>
      <Router>
        <App />
      </Router>
    </ReduxProvider>
  </React.StrictMode>
);

import { createRoot } from 'react-dom/client';
import App from './App';

import { Provider as ReduxProvider } from 'react-redux';
import store from './redux/store';

import { BrowserRouter as Router } from 'react-router-dom';

import { ThemeProvider } from '@xstyled/styled-components';
import mainTheme from './theme/mainTheme';
import ResetStyles from './theme/resetStyles';
import MainStyle from './theme/mainStyle';

const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
  <ReduxProvider store={store}>
    <Router>
      <ThemeProvider theme={mainTheme}>
        <ResetStyles />
        <MainStyle />
        <App />
      </ThemeProvider>
    </Router>
  </ReduxProvider>
);

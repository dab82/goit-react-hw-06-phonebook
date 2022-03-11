import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { ToastContainer } from 'react-toastify';
import '../node_modules/modern-normalize/modern-normalize.css';
import { ThemeProvider } from 'styled-components';
import { theme } from './mainstyle/theme';
import { App } from './components/App';
import { store, persistor } from './redux/store';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <App />
        </PersistGate>
      </Provider>
      <ToastContainer position="top-center" autoClose={3000} />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

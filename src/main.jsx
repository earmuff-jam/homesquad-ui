import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import { ThemeProvider } from '@emotion/react';
import { lightTheme } from './utils/Theme.js';
import { RouterProvider } from 'react-router-dom';
import { router } from './utils/router.jsx';
import { Provider } from 'react-redux';
import { store } from './store.jsx';
import { CssBaseline } from '@mui/material';

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={router}>
      <ThemeProvider theme={lightTheme}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </RouterProvider>
  </Provider>
);

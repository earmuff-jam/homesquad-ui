import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { authenticationAPI } from './services/authentication';
import { categoriesAPI } from './services/categories';
import { checkListAPI } from './services/checklist';
import { choreAPI } from './services/chore';
import { dashboardAPI } from './services/dashboard';
import { notificationsAPI } from './services/notifications';
import { onBoardingAPI } from './services/onBoarding';
import { userAPI } from './services/user';

export const store = configureStore({
  reducer: {
    [authenticationAPI.reducerPath]: authenticationAPI.reducer,
    [categoriesAPI.reducerPath]: categoriesAPI.reducer,
    [checkListAPI.reducerPath]: checkListAPI.reducer,
    [choreAPI.reducerPath]: choreAPI.reducer,
    [dashboardAPI.reducerPath]: dashboardAPI.reducer,
    [notificationsAPI.reducerPath]: notificationsAPI.reducer,
    [onBoardingAPI.reducerPath]: onBoardingAPI.reducer,
    [userAPI.reducerPath]: userAPI.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      authenticationAPI.middleware,
      categoriesAPI.middleware,
      checkListAPI.middleware,
      choreAPI.middleware,
      dashboardAPI.middleware,
      notificationsAPI.middleware,
      onBoardingAPI.middleware,
      userAPI.middleware
    ),
});

setupListeners(store.dispatch);

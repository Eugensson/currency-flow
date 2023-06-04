import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';

import { exchangesApi } from '../services/api';
import { currencyReducer } from '../redux/slice';

export const store = configureStore({
  reducer: {
    [exchangesApi.reducerPath]: exchangesApi.reducer,
    currency: currencyReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(exchangesApi.middleware),
});

setupListeners(store.dispatch);

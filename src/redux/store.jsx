import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { persistStore } from 'redux-persist';
import { persistedReducer } from './reducers';

export const store = configureStore({
  reducer: {
    phonebook: persistedReducer,
  },
  middleware: getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: ['persist/PERSIST'],
    },
  }),

  devTools: process.env.NODE_ENV === 'development',
});
export const persistor = persistStore(store);

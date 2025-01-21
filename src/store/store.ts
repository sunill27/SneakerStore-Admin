import { configureStore } from '@reduxjs/toolkit';
import dataSlice from './dataSlice';
import authSlice from './authSlice';

const store = configureStore({
  reducer: {
    auth: authSlice,
    data: dataSlice,
  },
});

export default store;

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

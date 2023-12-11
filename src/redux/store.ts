import { configureStore } from '@reduxjs/toolkit';
import filterSlice from '../redux/Slices/filterSlice';

// Combine reducers
const rootReducer = {
  filters: filterSlice,
};

export const store = configureStore({
  reducer: rootReducer,
});

// Define RootState
export type RootState = ReturnType<typeof store.getState>;

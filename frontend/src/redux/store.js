import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage
import { combineReducers } from 'redux';
import dataSlice from './dataSlice';
import buttonSlice from './buttonSlice';


// Combine reducers (you may have more slices later)
const rootReducer = combineReducers({
  data: dataSlice,
  button: buttonSlice,
});

// Persist config
const persistConfig = {
  key: 'root',
  storage,
};

// Wrap root reducer with persistReducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Create store
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // required for redux-persist
    }),
});

export const persistor = persistStore(store);


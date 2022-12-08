import { configureStore, combineReducers } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import { contactsReducer } from './contacts/contactSlice';
import { filterSlice } from './filter/filterSlice';
import storage from 'redux-persist/lib/storage';
import { authReducer } from './auth/authSlice';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

const rootReducer = combineReducers({
    filter: filterSlice.reducer,
  contacts: contactsReducer,
    auth: persistReducer(authPersistConfig, authReducer)
})

export const store = configureStore({
  reducer: rootReducer,
  middleware (getDefaultMiddleware) {
    return getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    })},
  devTools: process.env.NODE_ENV === 'development',
})

export const persistor = persistStore(store)



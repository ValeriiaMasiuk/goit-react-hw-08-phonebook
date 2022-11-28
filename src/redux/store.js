import { configureStore, combineReducers } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
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
import { contactSlice } from './contacts/contactSlice';
import { filterSlice } from './filter/filterSlice';


const rootReducer = combineReducers({
    filter: filterSlice.reducer,
    contacts: contactSlice.reducer,
})

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['contacts']
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware (getDefaultMiddleware) {
    return getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    })}
})

export const persistor = persistStore(store)



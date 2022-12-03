import { configureStore, combineReducers } from '@reduxjs/toolkit';
// import {
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from 'redux-persist';
import { contactsReducer } from './contacts/contactSlice';
import { filterSlice } from './filter/filterSlice';


const rootReducer = combineReducers({
    filter: filterSlice.reducer,
    contacts: contactsReducer,
})

export const store = configureStore({
  reducer: rootReducer,
  // middleware (getDefaultMiddleware) {
  //   return getDefaultMiddleware({
  //     serializableCheck: {
  //       ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
  //     },
  //   })}
})



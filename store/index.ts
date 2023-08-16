'use client';

import createWebStorage from 'redux-persist/lib/storage/createWebStorage';
import { persistReducer, persistStore } from 'redux-persist';
import { TypedUseSelectorHook, useSelector, useDispatch } from 'react-redux';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import adminReducer from '@/store/adminSlice';

const createNoopStorage = () => {
  return {
    getItem(_key: any) {
      return Promise.resolve(null);
    },
    setItem(_key: any, value: any) {
      return Promise.resolve(value);
    },
    removeItem(_key: any) {
      return Promise.resolve();
    },
  };
};

const storage = typeof window === 'undefined' ? createNoopStorage() : createWebStorage('local');

const persistConfig = {
  key: 'root',
  storage,
};

const rootReducer = combineReducers({ admin: adminReducer });

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),
  devTools: false,
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export default store;

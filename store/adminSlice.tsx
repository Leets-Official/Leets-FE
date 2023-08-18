'use client';

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { PURGE } from 'redux-persist';
import { Admin } from '@/types';
import { LocalStorage } from '@/utils';
import { ACCESS_TOKEN } from '@/constants';

const initialState: Admin = {
  name: '',
};

export const adminSlice = createSlice({
  name: 'admin',
  initialState,
  reducers: {
    login: (state: Admin, action: PayloadAction<Admin>) => ({ ...state, ...action.payload }),
    logout: () => {
      LocalStorage.removeItem(ACCESS_TOKEN);
      return initialState;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(PURGE, () => initialState);
  },
});

export const { login, logout } = adminSlice.actions;
export default adminSlice.reducer;

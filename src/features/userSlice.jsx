import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: null,
  email: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action) => {
      state.name = action.payload.user;
      state.email = action.payload.email;
    },
    logout: state => {
      state.user = null;
      state.email = null;
    },
  },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;

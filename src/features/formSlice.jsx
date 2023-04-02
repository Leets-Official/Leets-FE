import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
  name: '',
  SID: '',
  major: '',
  career: '',
  GPA: '',
  algorithm: '',
  project: '',
  link: '',
  phone: '',
  interviewDay: '',
  interviewTime: '',

  goal: '',
  completion: '',
  fight: '',
};

export const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    setForm: (state, action) => {
      const { id, value } = action.payload;
      if (id) {
        state[id] = value;
      }
    },
  },
});

export const { setForm } = formSlice.actions;
export default formSlice.reducer;

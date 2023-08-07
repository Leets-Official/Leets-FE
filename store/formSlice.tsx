import { Application, Input } from '@/types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export const initialState: Application = {
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
    setForm: (state: Application, action: PayloadAction<Input>) => {
      const { id, value } = action.payload;
      return { ...state, [id]: value };
    },
  },
});

export const { setForm } = formSlice.actions;
export default formSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';

export const journalSlice = createSlice({
  name: 'journal',
  initialState: {
    value: ''
  },
  reducers: {
    postEntry: (state, action) => {
      state.value = action.payload;
      console.log(state)
      console.log(action.payload)
    },
    deleteEntry: (state) => {
      state.value = '';
      console.log(state)
    }
  }
});

// delete is a reserved keyword
export const { postEntry, deleteEntry } = journalSlice.actions;

export default journalSlice.reducer;
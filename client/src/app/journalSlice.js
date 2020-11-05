import { createSlice } from '@reduxjs/toolkit';

// the reducer functions for updating state
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

// allows the useSelector(selectText) method to be used in order to get the state.
// const text = useSelector(selectText)
// then const text will be the state
// Alternative is to define selector in the file they are used instead of this file 
export const selectText = state => state.journal.value;

// the available dispatches
// delete is a reserved keyword
export const { postEntry, deleteEntry } = journalSlice.actions;

// export this whole reducer
export default journalSlice.reducer;
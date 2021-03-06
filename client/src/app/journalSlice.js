import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

// the reducer functions for updating state
export const journalSlice = createSlice({
  name: 'journal',
  initialState: {
    value: '',
    theme: 'light'
  },
  reducers: {
    postEntry: (state, action) => {
      state.value = action.payload;
      // console.log(state)
      // console.log(action.payload)
    },
    deleteEntry: (state) => {
      state.value = '';
      // console.log(state)
    },
    switchTheme: (state) => {
      if (state.theme === 'light') {
        state.theme = 'dark';
        sessionStorage.setItem('theme', 'dark');
      } else {
        state.theme = 'light';
        sessionStorage.setItem('theme', 'light');
      }
    }
  }
});

export const postData = entry => dispatch => {
  axios.post('api/journal', entry).then(data => {
    console.log(data);
  })
}

export const readData = (entry) => dispatch => {
  return new Promise((resolve, reject) => {
    axios.get('api/journal/all').then((data) => {
      // console.log(data);
      resolve(data);
    }).catch((err) => {
      reject(err)
    })
  })
}

// allows the useSelector(selectText) method to be used in order to get the state.
// const text = useSelector(selectText)
// then const text will be the state
// Alternative is to define selector in the file they are used instead of this file 
export const selectText = state => state.journal.value;

export const selectTheme = state => state.journal.theme;

// the available dispatches
// delete is a reserved keyword
export const { postEntry, deleteEntry, switchTheme } = journalSlice.actions;

// export this whole reducer
export default journalSlice.reducer;
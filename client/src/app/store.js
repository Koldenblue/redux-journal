import { configureStore } from '@reduxjs/toolkit';
import journalReducer from './journalSlice';

export default configureStore({
  reducer: {
    journal: journalReducer
  }
});

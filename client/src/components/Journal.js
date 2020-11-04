import React, { useState } from 'react';
import { postEntry, deleteEntry } from '../app/journalSlice';
import { useSelector, useDispatch } from 'react-redux';

export default function Journal() {
  const [text, setText] = useState('');

  const dispatch = useDispatch();

  return (<>
    <textarea className='journal-entry' onChange={(event) => setText(event.target.value)} cols='40' rows='10' />
    <button onClick={() => {
      console.log(text);
      dispatch(postEntry(text))
    }}>
      Save
    </button>
  </>)
}
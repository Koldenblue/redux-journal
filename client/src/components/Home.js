import axios from 'axios';
import React, { useState } from 'react';

export default function Home() {
  const [text, setText] = useState('');

  const getEntry = () => {
    axios.get('/api/entry').then((data) => {
      console.log(data)
    })
  }

  const save = () => {
    console.log(text);
  }

  return (
  <>
    <button onClick={getEntry} >CLICK</button>
    <p>Hi</p>

    {/* <textarea className='journal-entry' onChange={(event) => setText(event.target.value)} cols='40' rows='10' />
    <button onClick={save}>Save</button> */}
  </>
  )
}


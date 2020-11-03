import React, { useState } from 'react';

export default function Journal() {
  const [text, setText] = useState('');

  const save = () => {
    console.log(text);
  }

  return (<>
    <input className='journal-entry'>
    </input>
    <textarea onChange={(event) => setText(event.target.value)} cols='40' rows='10'></textarea>
    <button onClick={save}>Save</button>
  </>)
}
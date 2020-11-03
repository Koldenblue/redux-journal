import axios from 'axios';
import React from 'react';

export default function Home() {

  const getEntry = () => {
    axios.get('/api/entry').then((data) => {
      console.log(data)
    })
  }

  return (<>
    <button onClick={getEntry} >CLICK</button>
    <p>Hi</p>
  </>)
}
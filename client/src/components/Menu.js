import Axios from 'axios';
import React, { useEffect } from 'react';
import Nav from 'react-bootstrap/Nav';
import { useSelector, useDispatch } from 'react-redux';
import { readData } from '../app/journalSlice';

export default function Menu() {
  const dispatch = useDispatch();

  useEffect(() => {
    Axios.get('/api/moodtotals').then(data => {
      console.log(data)
    })
  }, [])

  const getLatestEntry = () => {
  }

  const getAllEntries = () => {
    console.log('reading')
    dispatch(readData('entry'));
  }

  return (<>
    <Nav defaultActiveKey="/home" className="flex-column">
      <Nav.Link href="/latest">View my latest entry</Nav.Link>
      <Nav.Link href='/journal/all'>View all entries</Nav.Link>
      <button onClick={getAllEntries} className='btn btn-success'>View all entries</button>
      <Nav.Link href="/specificdate">View entries on a specific date</Nav.Link>
    </Nav>
    {/* should have delete and update entries as well */}
    <p>My moods have been:</p>

  </>)
}
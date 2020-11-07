import React, { useEffect } from 'react';
import Nav from 'react-bootstrap/Nav';
import { useSelector, useDispatch } from 'react-redux';
import { readData } from '../app/journalSlice';
import Moods from './Moods';
import { useHistory } from "react-router-dom";

export default function Menu() {
  const dispatch = useDispatch();
  const history = useHistory();

  const getLatestEntry = () => {
  }

  // goes to the journal/all route, thru the redux store
  const getAllEntries = () => {
    history.push('/all');
  }

  const makeNewEntries = () => {
    history.push('/');
  }
  return (<>
    <Nav defaultActiveKey="/home" className="flex-column nav-menu">
      {/* <Nav.Link href="/latest">View my latest entry</Nav.Link> */}
      {/* <Nav.Link href='/allentries'>View all entries</Nav.Link> */}
      <button onClick={makeNewEntries} className='menu-btn btn btn-success'>Make New Entries</button>
      <button onClick={getAllEntries} className='menu-btn btn btn-success'>View all Entries</button>
      {/* <Nav.Link href="/specificdate">View entries on a specific date</Nav.Link> */}
    </Nav>
    {/* should have delete and update entries as well */}
  </>)
}
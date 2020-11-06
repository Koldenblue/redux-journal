import Axios from 'axios';
import React from 'react';
import Nav from 'react-bootstrap/Nav';

export default function Menu() {

  const getLatestEntry = () => {
    Axios.get('/api/journal')
  }

  return (<>
  <Nav defaultActiveKey="/home" className="flex-column">
  <Nav.Link href="/latest">View my latest entry</Nav.Link>
  <Nav.Link href='/all'>View all entries</Nav.Link>
  <Nav.Link href="/specificdate">View entries on a specific date</Nav.Link>
</Nav>
    {/* should have delete and update entries as well */}
    <p>My moods have been:</p>

  </>)
}
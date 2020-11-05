import React from 'react';

export default function Menu() {
  return (<>
    <button className='btn-primary btn'>View my latest entry</button>
    <button className='btn-primary btn'>View all entries</button>
    {/* should have delete and update entries as well */}
    <button className='btn-primary btn'>View entries on a specific date</button>
    <p>My moods have been:</p>

  </>)
}
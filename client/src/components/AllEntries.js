import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { readData } from '../app/journalSlice';
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function AllEntries() {
  const [entries, setEntries] = useState('');

  const dispatch = useDispatch();
  let key = 0;
  useEffect(() => {
    // upon load, get all journal entries. Then map entries to jsx.
    let allEntries = dispatch(readData()).then((data) => {
      // for (let entry of data.data[0].entries) {
      //   console.log(entry)
      // }
      setEntries(data.data[0].entries.map((entry) =>{
        return (
          <Container className='journal-container' key={key++}>
            <Row>
              <Col>
              <div className='journal-entry'>
                {entry['journalText']}
              </div>
              </Col>
              <Col md={2}>
              <div className='mood-entry'>
                {entry['mood']}
              </div>
              </Col>
            </Row>
          </Container>
        )
      }))
    })
    
    // accomplish the same thing in this local component, instead of with dispatch:
    // axios.get('api/journal/all').then((data) => {
    //   console.log(data)
    // });
  }, [])

  return (<>
    {entries}
  </>)
}
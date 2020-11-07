import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { readData } from '../app/journalSlice';
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Title from './Title';
import Menu from './Menu';

export default function AllEntries() {
  const [entries, setEntries] = useState('');

  const deleteEntry = (date) => {
    console.log(date);
    axios.delete(`api/delete/${date}`).then(data => {
      console.log(data);
    })
  }

  const dispatch = useDispatch();
  useEffect(() => {
    // upon load, get all journal entries. Then map entries to jsx.
    let allEntries = dispatch(readData()).then((data) => {
      // for (let entry of data.data[0].entries) {
      //   console.log(entry)
      // }
      console.log('reading')
      // console.log(data)
      console.log(data.data)

      setEntries(data.data.map((entry) => {
        return (
          <Container className='journal-container' key={entry.entries['date']}>
            <Row>
            <Col md={2}>
                <div className='mood-entry'>
                  {entry.entries['mood']}
                </div>
              </Col>
              <Col>
                <div className='journal-entry'>
                  {entry.entries['journalText']}
                </div>
              </Col>
            <Col md={1}>
              <Button className='del-btn' id={entry.entries['date']} onClick={() => deleteEntry(entry.entries['date'])}>Delete</Button>
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
    <Title />
    <Container fluid>
      <Row>
        <Col md={2}>
          <Menu />
        </Col>

        <Col>
          <Container>
            <Row>
              <Col>
                {entries}

              </Col>
            </Row>
          </Container>
        </Col>
      </Row>
    </Container>
  </>)
}
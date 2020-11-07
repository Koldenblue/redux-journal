import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { readData, selectTheme, switchTheme } from '../app/journalSlice';
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Title from './Title';
import Menu from './Menu';

export default function AllEntries() {
  const [entries, setEntries] = useState('');
  let currentTheme = useSelector(selectTheme);

  const deleteEntry = (id) => {
    axios.delete(`api/delete/${id}`).then(data => {
      sessionStorage.setItem('theme', currentTheme);
      window.location.reload();
    })
  }

  useEffect(() => {
    let sessionTheme = sessionStorage.getItem('theme');
    if (sessionTheme !== null && currentTheme !== sessionTheme) {
      dispatch(switchTheme());
    }
  }, [])

  const dispatch = useDispatch();
  useEffect(() => {
    try {
      // upon load, get all journal entries. Then map entries to jsx.
      let allEntries = dispatch(readData()).then((data) => {
        setEntries(data.data.map((entry) => {
          return (
            <Container className='journal-container' key={entry['_id']}>
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
                <Button className='del-btn' id={entry['_id']} onClick={() => deleteEntry(entry['_id'])}>Delete</Button>
              </Col>
              </Row>
            </Container>
          )
        }))
      }).catch(err => {
        console.error(err)
      })
    }
    catch (err) {
      console.error(err)
    }
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
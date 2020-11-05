import React, { useState } from 'react';
import { postEntry, deleteEntry } from '../app/journalSlice';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import Form from 'react-bootstrap/Form';

export default function Journal() {
  const [text, setText] = useState('');

  const dispatch = useDispatch();

  const post = async (event) => {
    event.preventDefault()
    console.log(event.target[0].value)
    await dispatch(postEntry(event.target[0].value));
    // axios.post('/api/entry', (req, res) => {
    //   console.log()
    // })
  }

  return (<>
  <Form onSubmit={(event) => post(event)}>
    <Row>
      <Col>
        <div className="input-group journal-entry">
          <div className="input-group-prepend">
            <span className="input-group-text">Today's Journal Entry</span>
          </div>
          <textarea className='form-control ' onChange={(event) => setText(event.target.value)} rows='10' aria-label="With textarea" />
        </div>
      </Col>

    </Row>

    <Row>
      <Col>
        <button className='btn-primary btn'>
          Save
        </button>
      </Col>
    </Row>
  </Form>
  </>)
}
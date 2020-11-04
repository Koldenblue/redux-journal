import React, { useState } from 'react';
import { postEntry, deleteEntry } from '../app/journalSlice';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useSelector, useDispatch } from 'react-redux';

export default function Journal() {
  const [text, setText] = useState('');

  const dispatch = useDispatch();

  return (<>
    <Row>
      <Col>
      <div class="input-group journal-entry">
      <div class="input-group-prepend">
    <span class="input-group-text">With textarea</span>
  </div>
        <textarea className='form-control ' onChange={(event) => setText(event.target.value)} rows='10' aria-label="With textarea" />
</div>
      </Col>

    </Row>

    <Row>
      <Col>
        <button className='btn-primary btn' onClick={() => {
          console.log(text);
          dispatch(postEntry(text))
        }}>
          Save
        </button>
      </Col>
    </Row>
  </>)
}
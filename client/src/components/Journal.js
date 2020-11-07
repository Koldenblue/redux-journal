import React, { useState, useEffect } from 'react';
import { postEntry, deleteEntry, selectText, postData, readData, selectTheme, switchTheme } from '../app/journalSlice';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useSelector, useDispatch } from 'react-redux';
import Form from 'react-bootstrap/Form';

export default function Journal() {
  const [text, setText] = useState('');
  let currentTheme = useSelector(selectTheme);

  let journalText = useSelector(selectText);
  const dispatch = useDispatch();

  const post = (event) => {
    event.preventDefault();
    let entry = {
      journalText: event.target[0].value,
      mood: event.target[1].value,
      date: new Date()
    };
    dispatch(postData(entry));
    sessionStorage.setItem('theme', currentTheme);
    window.location.reload();
  }

  useEffect(() => {
    let sessionTheme = sessionStorage.getItem('theme');
    if (sessionTheme !== null && currentTheme !== sessionTheme) {
      dispatch(switchTheme());
    }
  }, [])

  return (<>
    <Form onSubmit={(event) => post(event)}>
      <Row>
        <Col>
          <div className='input-group journal-entry'>
            <div className="input-group-prepend">
              <span className={`input-group-text ${currentTheme === 'dark' ? 'input-group-text-dark' : ""}`}>Today's Journal Entry</span>
            </div>
            <textarea className={currentTheme === 'dark' ? 'form-control dark-journal-text-area' : 'form-control'} onChange={(event) => setText(event.target.value)} rows='10' aria-label="With textarea" />
          </div>
        </Col>

      </Row>

      <Row>
        <Col>
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <label className={`input-group-text ${currentTheme === 'dark' ? 'input-group-text-dark' : ""}`}>How Am I Feeling?</label>
            </div>
            <select className={`custom-select ${currentTheme === 'dark' ? 'custom-select-dark' : ""}`} id="inputGroupSelect01">
              <option defaultValue>Happy</option>
              <option>Sad</option>
              <option>Angry</option>
              <option>Surprised</option>
              <option>Frustrated</option>
              <option>Embarrassed</option>
              <option>Grumpy</option>
              <option>Excited</option>
              <option>Anxious</option>
              <option>Confused</option>
            </select>
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
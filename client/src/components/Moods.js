import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/esm/Container';

export default function Moods(props) {
  const [moodList, setMoodList] = useState('')
  const [moodTitle, setMoodTitle] = useState('')
  let moods;
  let key = -1;
  useEffect(() => {
    Axios.get('/api/moodtotals').then(data => {
      moods = data.data;
      let moodArr = [];
      for (let elem in moods) {
        let newObj = {}
        newObj[elem] = moods[elem];
        moodArr.push(newObj);
      }

      setMoodList(moodArr.map((elem) => {
        key++;
          return (
            <Col md={2}>
              <p className='mood-btn' key={key++} id={`mood-${Object.keys(elem)[0].toLowerCase()}`}>
                {Object.keys(elem)[0]}<Badge variant="light">{Object.values(elem)[0]}</Badge>
              </p>
            </Col>
          )

      }))
      setMoodTitle(<p id='mood-title'>My moods have been:</p>)
    })
  }, [])


  return (<>
  <Container>
    <Row>
      <Col>
        {moodTitle}
      </Col>
    </Row>

    <Row>
        {moodList}
      <Col></Col>
    </Row>
    </Container>
  </>)
}
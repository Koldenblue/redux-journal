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
      let moodArr = [];
      let newObj = {}
      moods = data.data;
      console.log(moods)
      for (let i = 0, j = moods.length; i < j; i++) {
        console.log(moods[i])
        let elem = moods[i]['entries']['mood'];
        console.log(elem)
        if (!newObj[elem]) {
          newObj[elem] = 1
        } else {
          newObj[elem]++;
        }
      }
      console.log(newObj)

      for (let elem in newObj) {
        let moodObj = {};
        console.log(elem)
        moodObj[elem] = newObj[elem]
        moodArr.push(moodObj);
      }
      console.log(moodArr)

      setMoodList(moodArr.map((elem) => {
        key++;
          return (
            <Col key={key++} md={2}>
              <p className='mood-btn'  id={`mood-${Object.keys(elem)[0].toLowerCase()}`}>
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
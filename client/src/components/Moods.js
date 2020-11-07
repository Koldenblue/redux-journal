import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/esm/Container';
import { selectTheme } from '../app/journalSlice';
import { useSelector, useDispatch } from 'react-redux';


export default function Moods(props) {
  const [moodList, setMoodList] = useState('')
  const [moodTitle, setMoodTitle] = useState('')
  const [moodArr, setMoodArr] = useState([])
  let currentTheme = useSelector(selectTheme);

  // get entries from database, then add up total moods to display
  let moods;
  let key = -1;
  useEffect(() => {
    Axios.get('/api/moodtotals').then(data => {
      let newArr = [];
      let newObj = {}
      moods = data.data;
      // loop thru the retrieved data, create objects containing totals of each mood, then push to a new array
      for (let i = 0, j = moods.length; i < j; i++) {
        let elem = moods[i]['entries']['mood'];
        if (!newObj[elem]) {
          newObj[elem] = 1
        } else {
          newObj[elem]++;
        }
      }

      for (let elem in newObj) {
        let moodObj = {};
        moodObj[elem] = newObj[elem]
        newArr.push(moodObj);
      }
      // set the state equal to the new array, so that the state can then be mapped in the component
      setMoodArr(newArr)
      setMoodTitle(<p id='mood-title'>My moods have been:</p>)
    })
  }, [])

  if (moodArr !== []) {
    return (<>
    <Container>
      <Row>
        <Col>
          {moodTitle}
        </Col>
      </Row>

      <Row>
          {moodArr.map((elem) => {
          key++;
            return (
              <Col key={key++} md={2}>
                <p className={`${currentTheme === 'dark' ? 'mood-btn-dark' : 'mood-btn'}`} id={`mood-${Object.keys(elem)[0].toLowerCase()}`}>
                  {Object.keys(elem)[0]}<Badge variant={currentTheme}>{Object.values(elem)[0]}</Badge>
                </p>
              </Col>
            )

        })}
        <Col></Col>
      </Row>
      </Container>
    </>)
  } else {
    return (<> </>)
  }
}
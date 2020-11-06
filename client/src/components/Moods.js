import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';

export default function Moods(props) {
  const [moodList, setMoodList] = useState('')

  let moods;
  let key = 0;
  useEffect(() => {
    Axios.get('/api/moodtotals').then(data => {
      console.log(data)
      moods = data.data;
      console.log(moods)
      let moodArr = [];
      for (let elem in moods) {
        console.log(elem)
        console.log(moods[elem])
        let newObj = {}
        newObj[elem] = moods[elem];
        moodArr.push(newObj);
      }
      console.log(moodArr)

      setMoodList(moodArr.map((elem) => {
        console.log(elem)
        console.log(Object.keys(elem)[0])
        return (
          <Button variant="primary" key={key++} id={`mood-${Object.keys(elem)[0].toLowerCase()}`}>
            {Object.keys(elem)[0]}<Badge variant="light">{Object.values(elem)[0]}</Badge>
          </Button>
        )
      }))
      console.log(moodList)
    })
  }, [])


  return (<>
    <p>My moods have been:</p>
    {moodList}
  </>)
}
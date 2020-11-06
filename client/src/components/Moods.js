import React, { useEffect, useState } from 'react';
import Axios from 'axios';

export default function Moods(props) {
  const [moodList, setMoodList] = useState('')

  let moods;
  let key=0;
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

      setMoodList(moodArr.map(() => {
        return (<p key={key++}>
          hi
        </p>)
      }))
      console.log(moodList)
    })
  }, [])


  return (<>
    <p>My moods have been:</p>
    {moodList}
  </>)
}
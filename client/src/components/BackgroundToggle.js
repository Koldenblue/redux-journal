import React, { useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import { useSelector, useDispatch } from 'react-redux';
import { switchTheme, selectTheme } from '../app/journalSlice';


export default function BackgroundToggle() {
  const dispatch = useDispatch();
  let currentTheme = useSelector(selectTheme);

  useEffect(() => {
    console.log(currentTheme)
  }, [])
  
  return (
    <Form>
      <Form.Check
        type="switch"
        id="theme-switch"
        label="Light / Dark Theme"
        onClick={() => {dispatch(switchTheme())}}
        defaultChecked={false}
      />
    </Form>
  )
}
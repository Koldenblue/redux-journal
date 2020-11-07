import React, { useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import { useSelector, useDispatch } from 'react-redux';
import { switchTheme, selectTheme } from '../app/journalSlice';


export default function BackgroundToggle() {
  const dispatch = useDispatch();
  let currentTheme = useSelector(selectTheme);

  useEffect(() => {
    if (currentTheme === 'light') {
      document.querySelector('body').setAttribute('class', 'light-body');
    } else {
      document.querySelector('body').setAttribute('class', 'dark-body');
      document.getElementById('theme-switch').checked=true;
    }
  }, [currentTheme])
  
  return (
    <Form>
      <Form.Check
        type="switch"
        id="theme-switch"
        label="Light / Dark Theme"
        onClick={() => {dispatch(switchTheme())}}
        defaultChecked={currentTheme === 'dark' ? true : false}
      />
    </Form>
  )
}
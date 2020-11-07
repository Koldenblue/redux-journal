import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import { useSelector } from 'react-redux';
import { selectTheme } from '../app/journalSlice';

export default function Title() {
  let currentTheme = useSelector(selectTheme);
  

  return (
    <Jumbotron id={currentTheme === 'dark' ? 'jumbo-title-dark' : 'jumbo-title'} className='text-center' fluid>
      <Container>
        <h1>My Journal</h1>
      </Container>
    </Jumbotron>
  )
}
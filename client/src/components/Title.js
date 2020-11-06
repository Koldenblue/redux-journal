import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';

export default function Title() {
  return (
    <Jumbotron id='jumbo-title' className='text-center' fluid>
      <Container>
        <h1>My Journal</h1>
      </Container>
    </Jumbotron>
  )
}
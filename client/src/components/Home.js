import axios from 'axios';
import React, { useState } from 'react';
import Journal from './Journal';
import ReducerHook from './ReducerHook';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useSelector, useDispatch } from 'react-redux';
import Menu from './Menu';

export default function Home() {
  const getEntry = () => {
    axios.get('/api/entry').then((data) => {
      console.log(data)
    })
  }

  const dispatch = useDispatch();

  return (
    <>
      <Container fluid>
        <Row>
          <Menu />
        </Row>
        <Container>
          <Row>
            <Col>
              <Journal />
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  )
}


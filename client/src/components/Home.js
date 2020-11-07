import React from 'react';
import Journal from './Journal';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Menu from './Menu';
import Title from './Title';
import Moods from './Moods';

export default function Home() {

  return (
    <>
      <Title />

      <Container fluid>
        <Row>
          <Col md={2}>
            <Menu />
          </Col>

          <Col>
            <Row>
              <Moods />

            </Row>
            <Container>
              <Row>
                <Col>
                  <Journal />
                </Col>
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
    </>
  )
}


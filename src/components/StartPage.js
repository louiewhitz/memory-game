import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
const StartPage = () => {
    return (
      <div className="start-page dark-page">
        <h1 className="memory-header text-center">memory</h1>
        <Container className="start-page-container d-flex flex-column  bg-white">
          <Row>
            <Col className="text-white">
              <p className="start-page-container-header text-start ps-5">
                Select Theme
              </p>
            </Col>
            <Row>
              <Col className="ps-5">
                <Button className="start-page-button-dark ">Numbers</Button>
              </Col>
              <Col className="ps-5">
                <Button className="start-page-button-medium">Icons</Button>
              </Col>
            </Row>
          </Row>
          <Row>
            <Col className="text-white">
              <p className="start-page-container-header text-start ps-5">
                Number of Players
              </p>{' '}
            </Col>
          </Row>
        </Container>
      </div>
    );
    }
export default StartPage;
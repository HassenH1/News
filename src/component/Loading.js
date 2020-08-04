import React from "react";
import { Spinner, Container, Row, Col } from "react-bootstrap";

function Loading() {
  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col xs lg="2"></Col>
        <Col md="auto">
          <Spinner animation="border" role="status">
            <span className="sr-only">Loading...</span>
          </Spinner>
        </Col>
        <Col xs lg="2"></Col>
      </Row>
    </Container>
  );
}

export default Loading;

import React from "react";
import { Spinner, Container, Row, Col } from "react-bootstrap";

function Loading() {
  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col xs lg="2"></Col>
        <Col md="auto px-5 py-5 mx-5 my-5">
          <Spinner animation="border" role="status" variant="primary">
            <span className="sr-only">Loading...</span>
          </Spinner>
        </Col>
        <Col xs lg="2"></Col>
      </Row>
    </Container>
  );
}

export default Loading;

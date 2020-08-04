import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";

function Home() {
  return (
    <>
      <br />
      <Container>
        <Row>
          <Col style={{ border: "1px solid orange" }}></Col>
          <Col style={{ border: "1px solid blue" }}></Col>
          <Col style={{ border: "1px solid green" }}></Col>
        </Row>
      </Container>
    </>
  );
}

export default Home;

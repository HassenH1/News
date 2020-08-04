import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";

function Home() {
  const fetchCall = async () => {
    try {
      const response = await fetch("http://localhost:5000/", {
        method: "GET",
      });
      const result = await response.json();
      console.log(result, "<------result?");
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchCall();
  }, []);

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

import React, { useContext } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Context from "./Context/Context";

function Home() {
  const { headliners } = useContext(Context);
  return (
    <>
      <br />
      <Container>
        {console.log(headliners, "<-------from Home")}
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

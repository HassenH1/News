import React, { useContext } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import Context from "./Context/Context";

function Home() {
  const { headliners } = useContext(Context);

  let article = headliners?.articles?.map((article, i) => {
    return (
      <Row key={i}>
        <Col style={{ border: "1px solid orange" }} className="mx-2 my-2">
          {article.title}
          {/* <Image src={article.urlToImage} rounded /> */}
        </Col>
        <Col style={{ border: "1px solid blue" }} className="mx-2 my-2">
          {article.title}
          {/* <Image src={article.urlToImage} rounded /> */}
        </Col>
        <Col style={{ border: "1px solid green" }} className="mx-2 my-2">
          {article.title}
          {/* <Image src={article.urlToImage} rounded /> */}
        </Col>
      </Row>
    );
  });

  return (
    <>
      {console.log(headliners)}
      <br />
      <Container>{article}</Container>
    </>
  );
}

export default Home;

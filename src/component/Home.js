import React, { useContext } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import Context from "./Context/Context";
import Loading from "./Loading";

function Home() {
  const { headliners } = useContext(Context);

  const article = headliners?.articles
    ?.map((article, i) => {
      return i % 3 === 0 ? headliners.articles.slice(i, i + 3) : null;
    })
    .filter((x) => x !== null);

  const body = !article ? (
    <Loading />
  ) : (
    article?.map((art, i) => {
      return (
        <Row style={{ border: "1px solid orange" }}>
          {art.map((item) => (
            <Col className="mx-2 my-2">
              <Image src={item.urlToImage} thumbnail />
              {item.title}
            </Col>
          ))}
        </Row>
      );
    })
  );

  return (
    <>
      {console.log(headliners)}
      <br />
      <Container>{body}</Container>
    </>
  );
}

export default Home;

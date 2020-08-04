import React, { useContext } from "react";
import { Container, Row, Col, Image, Figure } from "react-bootstrap";
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
        <Row>
          {art.map((item) => (
            <Col className="mx-2 my-2">
              {/* <Image src={item.urlToImage} thumbnail />
              {item.title} */}
              {!item?.urlToImage ? (
                <Figure>
                  <h4 style={{ textAlign: "center" }}>No image</h4>
                  <Figure.Caption>{item.title}</Figure.Caption>
                </Figure>
              ) : (
                <Figure>
                  <Figure.Image
                    width={324}
                    height={216}
                    alt="171x180"
                    src={item.urlToImage}
                    style={{ borderRadius: "0.7rem" }}
                  />
                  <Figure.Caption>{item.title}</Figure.Caption>
                </Figure>
              )}
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

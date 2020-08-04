import React, { useContext } from "react";
import { Container, Row, Col, Figure, Card, Button } from "react-bootstrap";
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
        <Row className="text-center">
          {art.map((item) => (
            <Col className="mx-2 my-2">
              {!item?.urlToImage ? (
                <Figure>
                  <h4 style={{ textAlign: "center" }}>No image Available</h4>
                  <Figure.Caption>{item.title}</Figure.Caption>
                </Figure>
              ) : (
                <Figure>
                  <Figure.Image
                    width={324}
                    height={216}
                    src={item.urlToImage}
                    style={{ borderRadius: "0.7rem" }}
                  />
                  <Figure.Caption className="font-weight-light text-lg-center">
                    {item.title}
                  </Figure.Caption>
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
      <br />
      <Container>{body}</Container>
    </>
  );
}

export default Home;

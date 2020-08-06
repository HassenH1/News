import React, { useContext } from "react";
import { Container, Row, Col, Figure, Card, Button } from "react-bootstrap";
import Context from "./Context/Context";
import Loading from "./Loading";

function Home() {
  const { headliners } = useContext(Context);

  const handleClick = () => {
    console.log("clicked");
  };

  const article = headliners?.articles
    ?.map((article, i) => {
      return i % 3 === 0 ? headliners.articles.slice(i, i + 3) : null;
    })
    .filter((x) => x !== null);

  const getDate = (utcDate) => {
    const localDate = new Date(utcDate);
    return localDate.toLocaleDateString().toString();
  };

  const body = !article ? (
    <Loading />
  ) : (
    article?.map((art, i) => {
      return (
        <Row className="text-center" key={i}>
          {art.map((item, i) => (
            <Col className="mx-2 my-2" key={i}>
              {!item?.urlToImage ? (
                <Figure
                  onClick={() => handleClick()}
                  style={{ cursor: "pointer" }}
                >
                  <h4 style={{ textAlign: "center" }}>No image Available</h4>
                  <Figure.Caption className="font-weight-bold">
                    {item.title}
                  </Figure.Caption>
                  {/* <p className="font-weight-light">{item.publishedAt}</p> */}
                  <p className="font-weight-light">
                    {getDate(item.publishedAt)}
                  </p>
                </Figure>
              ) : (
                <Figure
                  onClick={() => handleClick()}
                  style={{ cursor: "pointer" }}
                >
                  <Figure.Image
                    width={324}
                    height={216}
                    src={item.urlToImage}
                    // style={{ borderRadius: "0.7rem" }}
                  />
                  <Figure.Caption className="font-weight-bold text-lg-center">
                    {item.title}
                  </Figure.Caption>
                  {/* <p className="font-weight-light">{item.publishedAt}</p> */}
                  <p className="font-weight-light">
                    {getDate(item.publishedAt)}
                  </p>
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

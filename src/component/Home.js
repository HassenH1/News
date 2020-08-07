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
      return i % 1 === 0 ? headliners.articles.slice(i, i + 1) : null;
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
                  style={{
                    cursor: "pointer",
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <h4
                    style={{
                      textAlign: "center",
                      width: "324px",
                      height: "216px",
                      border: "1px solid orange",
                    }}
                  >
                    No image Available
                  </h4>
                  <Figure.Caption className="text-lg-center d-flex flex-column  align-items-start w-50">
                    <div className="col">
                      <div className="font-weight-bold">{item.title}</div>
                    </div>
                    <p className="font-weight-light">
                      {getDate(item.publishedAt)}
                    </p>
                  </Figure.Caption>
                </Figure>
              ) : (
                <Figure
                  onClick={() => handleClick()}
                  style={{
                    cursor: "pointer",
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <Figure.Image
                    width={324}
                    height={216}
                    src={item.urlToImage}
                  />
                  <Figure.Caption className="text-lg-center d-flex flex-column  align-items-start w-50">
                    <div className="col">
                      <div className="font-weight-bold">{item.title}</div>
                    </div>
                    <div className="col">
                      <div className="font-weight-normal text-left">
                        {item.description}
                      </div>
                    </div>
                    <p className="font-weight-light">
                      {getDate(item.publishedAt)}
                    </p>
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
      {console.log(headliners)}
      <br />
      <Container>{body}</Container>
    </>
  );
}

export default Home;

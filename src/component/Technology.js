import React, { useContext, useEffect } from "react";
import { Container, Row, Col, Figure } from "react-bootstrap";
import Context from "./Context/Context";
import Loading from "./Loading";
import { useHistory } from "react-router-dom";

function Home() {
  let history = useHistory();

  const { technology, fetchTechnologies } = useContext(Context);

  const handleClick = (article) => {
    console.log(article, "what did i click on?");
    history.push(`/${article.title}`);
  };

  useEffect(() => {
    fetchTechnologies();
  }, []);

  const article = technology?.articles
    ?.map((article, i) => {
      return i % 1 === 0 ? technology.articles.slice(i, i + 1) : null;
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
                  onClick={() => handleClick(item)}
                  style={{
                    cursor: "pointer",
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                  className="shadow p-3 mb-5 bg-white rounded"
                >
                  <h4
                    style={{
                      textAlign: "center",
                      width: "324px",
                      height: "216px",
                      border: "1px solid whitesmoke",
                    }}
                  >
                    No image Available
                  </h4>
                  <Figure.Caption className="text-lg-center d-flex flex-column  align-items-start w-50">
                    <div className="col">
                      <div className="font-weight-bold">{item.title}</div>
                      <div className="col">
                        <div className="font-weight-normal text-left">
                          {item.description}
                        </div>
                      </div>
                    </div>
                    <div className="font-weight-light text-right w-100">
                      <p>{getDate(item.publishedAt)}</p>
                    </div>
                  </Figure.Caption>
                </Figure>
              ) : (
                <Figure
                  onClick={() => handleClick(item)}
                  style={{
                    cursor: "pointer",
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                  className="shadow p-3 mb-5 bg-white rounded"
                >
                  <Figure.Image
                    width={324}
                    height={216}
                    src={item.urlToImage}
                  />
                  <Figure.Caption className="text-lg-center d-flex flex-column align-items-start w-50">
                    <div className="col">
                      <div className="font-weight-bold">{item.title}</div>
                    </div>
                    <div className="col">
                      <div className="font-weight-normal text-left">
                        {item.description}
                      </div>
                    </div>

                    <div className="font-weight-light text-right w-100">
                      <p>{getDate(item.publishedAt)}</p>
                    </div>
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
      <Container>
        <Row>
          <Col></Col>
          <Col xs={6}>
            <div className="text-center font-weight-bold">
              <h1>Technology</h1>
            </div>
          </Col>
          <Col></Col>
        </Row>
      </Container>
      <Container>{body}</Container>
    </>
  );
}

export default Home;

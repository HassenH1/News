import React, { useEffect, useContext } from "react";
import Context from "./Context/Context";
import { useParams } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import Loading from "./Loading";

function ContentPage() {
  const { findingArticle, findArticle } = useContext(Context);
  let { title } = useParams();

  useEffect(() => {
    const timer = setTimeout(() => {
      findingArticle(title);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  let article = !findArticle ? (
    <>
      <Loading />
    </>
  ) : (
    findArticle?.article?.map((elem, i) => {
      return (
        <>
          <div key={i}>
            <p>
              {elem.content} - by{" "}
              <span className="font-italic font-weight-ligh">
                {elem.author}
              </span>
            </p>
            <button>
              <a href={elem.url} key={i}>
                Link to Full Article
              </a>
            </button>
          </div>
          <br />
          <br />
        </>
      );
    })
  );

  return (
    <>
      <br />
      <Container className="mh-100 h-100">
        <Row className="text-center">
          <Col></Col>
          <Col xs={8}>
            <h3 className="font-weight-bold">{title}</h3>
          </Col>
          <Col></Col>
        </Row>
        <br />
        <Row>
          <Col></Col>
          <Col xs={9}>{article}</Col>
          <Col></Col>
        </Row>
      </Container>
    </>
  );
}

export default ContentPage;

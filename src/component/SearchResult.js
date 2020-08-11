import React, { useContext } from "react";
import Context from "./Context/Context";
import { Container, Col, Row } from "react-bootstrap";
import Loading from "./Loading";

function SearchResult(props) {
  const { searchResult } = useContext(Context);

  let article = !searchResult ? (
    <>
      <Loading />
    </>
  ) : (
    searchResult?.article?.map((elem, i) => {
      return (
        <>
          <div key={i}>
            <h3>{elem.title}</h3>
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
            <h3 className="font-weight-bold">Search Result</h3>
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

export default SearchResult;

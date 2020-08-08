import React, { useEffect, useContext } from "react";
import Context from "./Context/Context";
import { useParams } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

function ContentPage() {
  const { findingArticle, findArticle } = useContext(Context);
  let { title } = useParams();

  useEffect(() => {
    findingArticle(title);
  }, []);

  let article = findArticle?.article?.map((elem, i) => elem.content);

  return (
    <div style={{ border: "1px solid red" }}>
      <Container className="mh-100 h-100">
        <Row>
          <Col></Col>
          <Col xs={6}>{article}</Col>
          <Col></Col>
        </Row>
      </Container>
    </div>
  );
}

export default ContentPage;

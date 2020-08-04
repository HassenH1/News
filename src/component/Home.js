import React, { useContext } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import Context from "./Context/Context";

function Home() {
  const { headliners } = useContext(Context);

  const article = headliners?.articles
    ?.map((article, i) => {
      // return (
      //   <Row key={i}>
      //     <Col style={{ border: "1px solid orange" }} className="mx-2 my-2">
      //       {article.title}
      //     </Col>
      //     <Col style={{ border: "1px solid blue" }} className="mx-2 my-2">
      //       {article.title}
      //     </Col>
      //     <Col style={{ border: "1px solid green" }} className="mx-2 my-2">
      //       {article.title}
      //     </Col>
      //   </Row>
      // );
      return i % 3 === 0 ? headliners.articles.slice(i, i + 3) : null;
    })
    .filter((x) => x !== null);

  return (
    <>
      {console.log(headliners)}
      <br />
      <Container>
        {/* {article} */}
        {article?.map((art, i) => {
          return (
            <Row>
              {art.map((item) => (
                <Col style={{ border: "1px solid red" }}>{item.title}</Col>
              ))}
            </Row>
          );
        })}
      </Container>
    </>
  );
}

export default Home;

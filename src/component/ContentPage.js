import React, { useEffect, useContext } from "react";
import Context from "./Context/Context";
import { useParams } from "react-router-dom";

function ContentPage() {
  const { findingArticle, findArticle } = useContext(Context);
  let { title } = useParams();

  useEffect(() => {
    findingArticle(title);
  }, []);

  let article = findArticle?.article?.map((elem, i) => elem.content);

  return (
    <div>
      <div>{article}</div>
      {console.log(findArticle)}
    </div>
  );
}

export default ContentPage;

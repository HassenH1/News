import React, { useContext } from "react";
import Context from "./Context/Context";

function SearchResult(props) {
  const { searchResult } = useContext(Context);

  console.log(searchResult);

  return <div>{searchResult?.article?.map((elem) => elem.author)}</div>;
}

export default SearchResult;

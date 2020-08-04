import React, { createContext, useState, useEffect } from "react";

export const Context = createContext();

export default function ContextProvider(props) {
  const [TopHeadlines, setTopHeadlines] = useState();

  const fetchingTopHeadlines = async () => {
    try {
      const response = await fetch("http://localhost:5000/", {
        method: "GET",
      });
      const result = await response.json();
      console.log(result, "<------------the result is????");
      setTopHeadlines(result.articles);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchingTopHeadlines();
  }, []);

  return (
    //passing values down as "props"
    <Context.Provider value={{ TopHeadlines }}>
      {props.children}
    </Context.Provider>
  );
}

import React, { useState, useEffect } from "react";
import Context from "./Context";

function ContextProvider(props) {
  const [headliners, setHeadliners] = useState();
  const [technology, setTechnology] = useState();
  const [search, setSearch] = useState();

  const fetchHeadliners = async () => {
    try {
      const response = await fetch("http://localhost:5000/", {
        method: "Get",
      });

      const result = await response.json();
      setHeadliners(result);
    } catch (err) {
      console.log(err);
    }
  };

  const fetchTechnologies = async () => {
    try {
      const response = await fetch("http://localhost:5000/technology", {
        method: "Get",
      });

      const result = await response.json();
      setTechnology(result);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchHeadliners();
    fetchTechnologies();
  }, []);

  return (
    <Context.Provider value={{ headliners, technology }}>
      {props.children}
    </Context.Provider>
  );
}

export default ContextProvider;

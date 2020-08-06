import React, { useState, useEffect } from "react";
import Context from "./Context";

function ContextProvider(props) {
  const [headliners, setHeadliners] = useState();
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

  const testing = async () => {
    try {
      const response = await fetch("http://localhost:5000/testing", {
        method: "GET",
      });

      const result = await response.json();
      console.log(result, "<---------------the response for testing");
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchHeadliners();
    testing();
  }, []);

  return (
    <Context.Provider value={{ headliners }}>{props.children}</Context.Provider>
  );
}

export default ContextProvider;

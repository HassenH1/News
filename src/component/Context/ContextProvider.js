import React, { useState, useEffect } from "react";
import Context from "./Context";

function ContextProvider(props) {
  const [headliners, setHeadliners] = useState();

  const fetchingHeadliners = async () => {
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

  useEffect(() => {
    fetchingHeadliners();
  }, []);

  return (
    <Context.Provider value={{ headliners }}>{props.children}</Context.Provider>
  );
}

export default ContextProvider;

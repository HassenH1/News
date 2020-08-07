import React, { useState, useEffect } from "react";
import Context from "./Context";

function ContextProvider(props) {
  const [headliners, setHeadliners] = useState();
  const [technology, setTechnology] = useState();
  const [politics, setPolitics] = useState();
  const [sports, setSports] = useState();
  const [entertainment, setEntertainment] = useState();
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

  const fetchPolitics = async () => {
    try {
      const response = await fetch("http://localhost:5000/politics", {
        method: "Get",
      });

      const result = await response.json();
      setPolitics(result);
    } catch (err) {
      console.log(err);
    }
  };

  const fetchSports = async () => {
    try {
      const response = await fetch("http://localhost:5000/sports", {
        method: "Get",
      });

      const result = await response.json();
      setSports(result);
    } catch (err) {
      console.log(err);
    }
  };

  const fetchEntertainment = async () => {
    try {
      const response = await fetch("http://localhost:5000/entertainment", {
        method: "Get",
      });

      const result = await response.json();
      setEntertainment(result);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchHeadliners();
  }, []);

  return (
    <Context.Provider
      value={{
        headliners,
        technology,
        politics,
        sports,
        entertainment,
        fetchTechnologies,
        fetchPolitics,
        fetchSports,
        fetchEntertainment,
      }}
    >
      {props.children}
    </Context.Provider>
  );
}

export default ContextProvider;

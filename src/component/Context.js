import React, { createContext, useState } from "react";

export const Context = createContext();

export default function ContextProvider(props) {
  return (
    //passing values down as "props"
    <Context.Provider value={{}}>{props.children}</Context.Provider>
  );
}

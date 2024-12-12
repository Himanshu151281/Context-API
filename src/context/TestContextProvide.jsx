import React from "react";
import TestContext from "./TestContext";
import { useState } from "react";

function TestContextProvider({ children }) {
  const [data, setData] = useState("");

  return (
    <>
      <TestContext.Provider value={{ data, setData }}>
        {children}
      </TestContext.Provider>
    </>
  );
}

export default TestContextProvider;

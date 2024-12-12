import React from "react";
import TestContext from "../context/TestContext";
import { useContext } from "react";

function ReceiveData() {
  const { data } = useContext(TestContext);

  if (!data) return <div>No data found!</div>;

  return <div>Data found :: {data}</div>;
}

export default ReceiveData;

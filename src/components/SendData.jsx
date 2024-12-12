import React from "react";
import TestContext from "../context/TestContext";
import { useContext } from "react";
import { useState } from "react";

function SendData() {
  const [input, setInput] = useState("");
  const { setData } = useContext(TestContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    setData(input);
  };
  return (
    <div>
      <input
        type="text"
        onChange={(e) => {
          setInput(e.target.value);
        }}
      />
      <button onClick={handleSubmit}>Send</button>
    </div>
  );
}

export default SendData;

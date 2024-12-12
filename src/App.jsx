import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import TestContextProvider from "./context/TestContextProvide";
import SendData from "./components/SendData";
import ReceiveData from "./components/ReceiveData";

export default function App() {
  return (
    <TestContextProvider className="text-3xl font-bold underline">
      <SendData />
      <ReceiveData />
    </TestContextProvider>
  );
}

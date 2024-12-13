import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import TodoContextProvider from "./context/TodoContextProvider";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

export default function App() {
  return (
    <>
      <TodoContextProvider>
        <TodoInput />
        <TodoList/>
      </TodoContextProvider>
    </>
  );
}

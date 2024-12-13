import React from "react";
import { useState, useContext } from "react";
import TodoContext from "../context/TodoContext";
import "./TodoInput.css"; // Import the CSS file

function TodoInput() {
  const [input, setInput] = useState("");

  const { addTodo } = useContext(TodoContext);

  const handleAddTodo = (e) => {
    e.preventDefault();
    addTodo(input);
    setInput("");
  };

  return (
    <div className="todo-input-container">
      <form onSubmit={handleAddTodo} className="todo-input-container">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="todo-input"
          placeholder="Enter your todo"
        />
        <button className="todo-button">
          Add Todo
        </button>
      </form>
    </div>
  );
}

export default TodoInput;
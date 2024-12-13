import React from "react";
import { useContext } from "react";
import TodoContext from "../context/TodoContext";
import "./TodoList.css"; // Import the CSS file

function TodoList() {
  const { todos, deleteTodo } = useContext(TodoContext);

  return (
    <div className="todo-list-container">
      {todos.map((todo) => {
        return (
          <div key={todo.id} className="todo-item">
            <p className="todo-text">
              {todo.todoText}
              <button onClick={() => deleteTodo(todo.id)} className="delete-button">
                Delete
              </button>
            </p>
          </div>
        );
      })}
    </div>
  );
}

export default TodoList;
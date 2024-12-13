import React from "react";
import { useContext } from "react";
import TodoContext from "../context/TodoContext";

function TodoList() {
  const { todos, deleteTodo } = useContext(TodoContext);

  return (
    <div>
      {todos.map((todo) => {
        return (
          <div key={todo.id}>
            <p>
              {todo.todoText} <button onClick={deleteTodo}>Delete</button>
              <button>Update</button>
            </p>
          </div>
        );
      })}
    </div>
  );
}

export default TodoList;

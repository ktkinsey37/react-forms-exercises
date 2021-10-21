import React, { useState } from "react";
import NewToDoForm from "./NewToDoForm";


function ToDoList() {
  const [todos, setTodos] = useState([]);

  const deleteTodo = (todo) => {
    setTodos(todos.filter(t => t.todo !== todo))
  }

  const renderToDos = () => {
    return (
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            {todo.todo} <button onClick={() => deleteTodo(todo.todo)}>X</button>
          </li>
        ))}
      </ul>
    );
  };


  const addToDo = todo => {
    setTodos(todos => [...todos, todo]);
  };
  // end addItem

  return (
    <div className="TodoList">
      <NewToDoForm addToDo={addToDo} />
      {renderToDos()}
    </div>
  );
};
// end

export default ToDoList;

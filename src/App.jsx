import { useState } from "react";
import "./App.css";
import TodoHeader from "./components/TodoHeaders";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

function fetchTodos() {
  const result = [];
  for (let i = 0; i < localStorage.length; i++) {
    const value = localStorage.key(i);
    result.push(value);
  }

  return result;
}

function App() {
  const [todos, setTodos] = useState(fetchTodos());

  const handleRemove = (todo) => {
    setTodos(todos.filter((item) => item !== todo));
    localStorage.removeItem(todo);
  };

  const addTodo = (inputText) => {
    localStorage.setItem(inputText, inputText);
    setTodos((currentTodos) => [...currentTodos, inputText]);
  };

  return (
    <div>
      <TodoHeader />
      <TodoInput onTodoAdd={addTodo} />
      <TodoList todos={todos} onTodoRemove={handleRemove} />
    </div>
  );
}

export default App;

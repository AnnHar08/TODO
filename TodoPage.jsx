// TodoPage.js
import React, { useState } from "react";

const TodoPage = () => {
  const [todos, setTodos] = useState([]);
  const [todoInput, setTodoInput] = useState("");

  const addTodo = () => {
    if (todoInput.trim() !== "") {
      setTodos([
        ...todos,
        { id: Date.now(), text: todoInput, completed: false },
      ]);
      setTodoInput("");
    }
  };

  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      })
    );
  };

  return (
    <div>
      <h2>Todo-lista</h2>
      <input
        type="text"
        placeholder="Lägg till en ny todo"
        value={todoInput}
        onChange={(e) => setTodoInput(e.target.value)}
      />
      <button onClick={addTodo}>Lägg till</button>
      <ul>
        {todos.map((todo) => (
          <li
            key={todo.id}
            style={{ textDecoration: todo.completed ? "line-through" : "none" }}
          >
            <span onClick={() => toggleTodo(todo.id)}>{todo.text}</span>
            <button onClick={() => removeTodo(todo.id)}>Ta bort</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoPage;

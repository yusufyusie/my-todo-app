
import React, { useState } from 'react';
import './TodoApp.css';

function App() {
  // Step 1: State for the list of todos
  const [todos, setTodos] = useState([]);
  // Step 1: State for the input value
  const [input, setInput] = useState("");

  // Step 2: Handler for form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim() === "") return;
    setTodos([...todos, { text: input, completed: false }]);
    setInput("");
  };

  // Step 4: Handler to toggle completed state
  const toggleTodo = (idx) => {
    setTodos(
      todos.map((t, i) =>
        i === idx ? { ...t, completed: !t.completed } : t
      )
    );
  };

  // Step 5: Handler to delete a todo
  const deleteTodo = (idx) => {
    setTodos(todos.filter((_, i) => i !== idx));
  };

  return (
    <div className="app-container">
      <h1 className="todo-header">Todo App</h1>
      {/* Step 2: Form to add new todo */}
      <form className="todo-form" onSubmit={handleSubmit}>
        <input
          className="todo-input"
          type="text"
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder="Add a new todo"
        />
        <button className="add-btn" type="submit">Add</button>
      </form>
      {/* Step 3: Display the list of todos */}
      <ul className="todo-list">
        {todos.map((todo, idx) => (
          <li className="todo-item" key={idx}>
            {/* Step 4: Click to toggle completed */}
            <span
              className={`todo-text${todo.completed ? ' completed' : ''}`}
              onClick={() => toggleTodo(idx)}
              title="Click to mark as completed"
            >
              {todo.text}
            </span>
            {/* Step 5: Delete button */}
            <button
              className="delete-btn"
              onClick={() => deleteTodo(idx)}
              title="Delete todo"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
      {/*
        Step-by-step summary:
        1. useState for todos and input (state management)
        2. Form for adding todos (controlled input, form handling)
        3. List rendering with map (display todos)
        4. Click to toggle completed (event handling, conditional styling)
        5. Delete button (array manipulation, event handling)
      */}
    </div>
  );
}

export default App;

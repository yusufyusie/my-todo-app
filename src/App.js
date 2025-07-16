
import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  // State for the list of todos
  const [todos, setTodos] = useState([]);
  // State for the input value
  const [input, setInput] = useState("");

  // Handler for form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim() === "") return;
    setTodos([...todos, { text: input, completed: false }]);
    setInput("");
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Todo App</h1>
        {/* Step 2: Form to add new todo */}
        <form onSubmit={handleSubmit} style={{ marginBottom: '1rem' }}>
          <input
            type="text"
            value={input}
            onChange={e => setInput(e.target.value)}
            placeholder="Add a new todo"
          />
          <button type="submit">Add</button>
        </form>
        {/* Step 3: Display the list of todos */}
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {todos.map((todo, idx) => (
            <li
              key={idx}
              style={{
                textAlign: 'left',
                margin: '0.5rem 0',
                textDecoration: todo.completed ? 'line-through' : 'none',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}
            >
              <span
                onClick={() => {
                  // Toggle completed state
                  setTodos(
                    todos.map((t, i) =>
                      i === idx ? { ...t, completed: !t.completed } : t
                    )
                  );
                }}
                title="Click to mark as completed"
                style={{ flex: 1 }}
              >
                {todo.text}
              </span>
              <button
                onClick={() => {
                  setTodos(todos.filter((_, i) => i !== idx));
                }}
                style={{ marginLeft: '1rem' }}
                title="Delete todo"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default App;

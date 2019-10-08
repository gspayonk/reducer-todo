import React from 'react';
import { useState, useReducer } from 'react';
import './App.css';

//import reducers
import { initialState, ToDo } from './reducers/reducer';

function App() {

  const [todo, setTodo] = useState('');
  const [state, clearDone] = useReducer(ToDo, initialState);

  const handleChange = event => {
    setTodo(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    clearDone({ type: 'ADD-TODO', payload: todo });
    setTodo('');
  };

  return (

    <div className='App'>
      <h1>To-Do List</h1>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          name='todo'
          value={todo}
          onChange={handleChange}
          placeholder='Enter a to-do item!'
        />
        <button type='submit'>Add</button>
      </form>

      <div className='todo-container'>
        {state.toDoItems.map(todo => (
          <button
            key={todo.id}
            onClick={() => clearDone({ type: 'TOGGLE-TODO', payload: todo })}
          >
            <p>{todo.item}</p>
            <p>Completion Status: {todo.completed ? 'Done' : 'Processing'}</p>
          </button>
        ))}
      </div>

      <button onClick={() => clearDone({ type: 'CLEAR-DONE' })}>
        Click Here to Delete Completed Tasks!
      </button>
    </div>
  );
}
export default App;
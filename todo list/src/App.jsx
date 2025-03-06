import React, { useState } from 'react';
import ToDoList from './ToDoList';

function App() {
  // Part A: State Management
  // Initialize state with hard-coded tasks
  const [tasks, setTasks] = useState([
    'Do laundry',
    'Go to gym',
    'Walk dog'
  ]);

  return (
    <div className="App">
      <h1>To-Do List :)</h1>
      {/* Part B: Passing Props */}
      <ToDoList tasks={tasks} />
    </div>
  );
}

export default App;

import React from 'react';
import './App.css';
import TodoList from './components/TodoList';
// Daniel Moradi
// Webbutveckling 2: Klient
/*React.StrictMode används för utvecklingsläge och hjälper till att hitta och åtgärda problem med komponenten.
  Den används istället för "use strict"; för att React acepterade inte den.
*/
function App() {
  return (
    <React.StrictMode>
      <div className="todo-app">
        <TodoList />
      </div>
    </React.StrictMode>
  );
}

export default App;

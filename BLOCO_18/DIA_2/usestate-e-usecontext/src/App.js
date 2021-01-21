import React from 'react';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

import TodoProvider from './context/TodoProvider';

// O TodoProvider vai dar acesso ao contexto global

function App() {
  return (
    <main>
      <TodoProvider>
        <TodoInput />
        <TodoList />
      </TodoProvider>
    </main>
  )
}

export default App;
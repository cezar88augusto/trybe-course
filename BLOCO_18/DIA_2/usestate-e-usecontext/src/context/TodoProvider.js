import React, { useState } from 'react';

import TodoContext from './TodoContext'; //Pegando o contexto criado

function TodoProvider({ children }) {
  const [todos, setTodos] = useState([]);

  const addTodo = (newTodo) => {
    setTodos(todos.concat(newTodo));
  };

  return (
    <main>
      <TodoContext.Provider value={{ todos, addTodo }}>
        {children} {/* Qualquer elemento abaixo do TodoContext.Provider, terão acesso aos valores definidos em "value". */}
      </TodoContext.Provider>
    </main>
  )
}

export default TodoProvider;

import React, { useContext} from 'react';
import TodoContext from '../context/TodoContext';

function TodoList() {

  const { todos } = useContext(TodoContext);
  return (
    // PRIMEIRO JEITO
    /* O consumer vai dar acesso as variáveis declaradas no provider. */

    /* <TodoContext.Consumer>
      {({ todos }) => (
        <ul>
          {todos.map((todo, index) => { <li key={index}>{todo}</li> })}
        </ul>
      )}
       </TodoContext.Consumer>     
    */

    // SEGUNDO JEITO
    <ul>
      {todos.map((todo, index) => { return <li key={index}>{todo}</li> })}
    </ul>

   )
}

export default TodoList;
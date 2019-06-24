import React from 'react';
import Todoitem from './Todoitem/Todoitem';

const Todos = props => props.todos.map(todo => (
  <Todoitem
    key={todo.id}
    todo={todo}
    deleteTodo={props.deleteTodo}
    markTodoDone={props.markTodoDone}
  />
));

export default Todos;

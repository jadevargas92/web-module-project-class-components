import React from 'react';

const Todo = props => {
  const handleClick = e => {
    e.preventDefault();
    props.toggleCompleted(props.todo.id)
  }
  return (
    <div onClick={handleClick} className={`${props.todo.completed ? ' completed' : ''}`}>
      <p>{props.todo.task}</p>
    </div>
  );
};

export default Todo;
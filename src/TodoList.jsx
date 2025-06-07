import React from 'react';
import TodoItem from './TodoItem';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import './TodoAnimations.css'; // We’ll create this next

const TodoList = ({ todos, onDelete, onEdit, onToggle }) => {
  return (
    <TransitionGroup className="todo-list">
      {todos.map(todo => (
        <CSSTransition key={todo.id} timeout={300} classNames="fade">
          <TodoItem
            todo={todo}
            onDelete={onDelete}
            onEdit={onEdit}
            onToggle={onToggle}
          />
        </CSSTransition>
      ))}
    </TransitionGroup>
  );
};

export default TodoList;

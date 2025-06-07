import React, { useState } from 'react';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import './TodoAnimations.css';

const TodoItem = ({ todo, onDelete, onEdit, onToggle }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(todo.text);

  const handleEdit = () => {
    if (isEditing && newText.trim()) {
      onEdit(todo.id, newText);
    }
    setIsEditing(!isEditing);
  };

  return (
    <div className="todo-item">
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onToggle(todo.id)}
      />

      <SwitchTransition mode="out-in">
        <CSSTransition
          key={isEditing ? 'edit' : 'view'}
          timeout={200}
          classNames="fade-slide"
        >
          {isEditing ? (
            <input
              type="text"
              value={newText}
              onChange={(e) => setNewText(e.target.value)}
            />
          ) : (
            <span
              className={`todo-text ${todo.completed ? 'completed' : ''}`}
            >
              {todo.text}
            </span>
          )}
        </CSSTransition>
      </SwitchTransition>

      <button className="edit" onClick={handleEdit}>{isEditing ? 'Save' : 'Edit'}</button>
      <button className="delete" onClick={() => onDelete(todo.id)}>Delete</button>
    </div>
  );
};

export default TodoItem;

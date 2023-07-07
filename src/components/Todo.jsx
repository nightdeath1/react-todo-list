import React, { useState } from "react";
import { RiCloseCircleLine } from "react-icons/ri";
import { TiEdit } from "react-icons/ti";
import {MdDoneAll, MdRemoveDone } from 'react-icons/md'
import TodoForm from './TodoForm'


function Todo({ todos, completeTodo, removeTodo, updateTodo }) {
    
  const [edit, setEdit] = useState({
    id: null,
    value: "",
  });

  const submitUpdate = (value) => {
    updateTodo(edit.id, value);
    setEdit({
      id: null,
      value: "",
    });
  };

  if (edit.id) {
    return <TodoForm edit={edit} onSubmit={submitUpdate} />;
  }
  return todos.map((todo, index) => (
    <div
      className={todo.isComplete ? "todo-row complete" : "todo-row"}
      key={index}
    >
      <div key={todo.id}>
        {todo.text}
      </div>
      <div className="icons">
        {todo.isComplete? <MdRemoveDone onClick={() => completeTodo(todo.id)} /> : <MdDoneAll onClick={() => completeTodo(todo.id)}/> }
        <RiCloseCircleLine
          onClick={() => removeTodo(todo.id)}
          className="delete-icon"
        />
        <TiEdit
          onClick={() => setEdit({ id: todo.id, value: todo.text })}
          className="edit-icon"
        />
      </div>
    </div>
  ));
}

export default Todo;
